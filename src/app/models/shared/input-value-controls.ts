export interface InputValueControls {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  isValid: boolean;
  helperText: string;
  controls: {
    required: boolean;
    minLength: number | null;
    maxLength: number | null;
    pattern?: string;
    check?: () => Promise<boolean> | boolean;
  };
}
