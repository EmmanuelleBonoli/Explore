import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {Subject, from, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, OnChanges {
  @Input() searchLocalisation!: string;
  private map!: L.Map;
  private position: [number, number] = [46.60335, 1.88833];
  private zoomOnMap: number = 5;
  private localisationSubject = new Subject<string>();
  private DEBOUNCE_DELAY: number = 1000;

  private initMap(): void {
    this.map = L.map('map').setView(this.position, this.zoomOnMap);

    // Ajouter l'attribution à OpenStreetMap : obligatoire !
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  ngOnInit(): void {
    this.initMap();

    this.localisationSubject.pipe(
      debounceTime(this.DEBOUNCE_DELAY),
      distinctUntilChanged(),
      switchMap(search => this.findPositionFromSearch(search))
    ).subscribe(newPosition => {
      this.position = newPosition;
      this.zoomOnMap = 12;
      if (this.map) {
        this.map.setView(this.position, this.zoomOnMap);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchLocalisation'] && !changes['searchLocalisation'].isFirstChange()) {
      this.localisationSubject.next(this.searchLocalisation);
    }
  }

  // Fonction pour récupérer les coordonnées GPS à partir de la localisation
  findPositionFromSearch(search: string): Observable<[number, number]> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`;
    return from(fetch(url).then(res => res.json())).pipe(
      switchMap((data: any[]) => {
        if (data.length > 0) {
          const {lat, lon} = data[0];
          return of([parseFloat(lat), parseFloat(lon)] as [number, number]);
        } else {
          throw new Error('Localisation introuvable');
        }
      }),
      catchError(error => {
        console.error('Erreur lors de la recherche de localisation :', error);
        return of(this.position);
      })
    );
  }
}
