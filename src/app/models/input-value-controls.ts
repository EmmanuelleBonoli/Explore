export interface InputValueControls {
  label: string;
  placeholder: string;
  value: string;
  isValid: boolean;
  helperText: string;
  controls: {
    required: boolean;
    minLength: number | null;
    maxLength: number | null;
    custom: () => void | null;
  };
}
