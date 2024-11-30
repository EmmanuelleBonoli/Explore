import {Injectable, inject} from '@angular/core';
import {MessageService} from 'primeng/api';
import {throwError, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  messageService: MessageService = inject(MessageService);

  constructor() {
  }

  showToast(summary: string, detail: string, severity: string): void {
    this.messageService.add({
      severity: severity, // "success" | "info" | "warn" | "error"
      summary: summary,  // Titre du message
      detail: detail,    // Corps du message
    });
  }

  errorApiService(error: HttpErrorResponse, context: string): Observable<never> {
    console.error(`Erreur API (${context}):`, error);
    return throwError(() => new Error(`Erreur lors de ${context}.`));
  }


  // TODO : mettre checkValidityForm dans utilsService
}
