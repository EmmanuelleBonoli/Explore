import {inject} from '@angular/core';
import {MessageService} from 'primeng/api';
import {throwError, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {InputValueControls} from "../../models/shared/input-value-controls";

export function showToast(summary: string, detail: string, severity: string): void {
  const messageService: MessageService = inject(MessageService);
  messageService.add({
    severity: severity, // "success" | "info" | "warn" | "error"
    summary: summary,  // Titre du message
    detail: detail,    // Corps du message
  });
}

export function errorApiService(error: HttpErrorResponse, context: string): Observable<never> {
  console.error(`Erreur API (${context}):`, error);
  return throwError(() => new Error(`Erreur lors de ${context}.`));
}

export function checkFormValidity(controls: InputValueControls[]): boolean {
  return controls.every(control => control.isValid);
}

export function convertMinutesInHours(duration: number): string {
  const hours = Math.floor(duration / 60);
  const remainingMinutes = duration % 60;

  return remainingMinutes === 0 ? `${hours}h` : `${hours}h${remainingMinutes}`;
}

