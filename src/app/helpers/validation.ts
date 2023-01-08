export function showErrorMessage(condition: boolean, message?: string) {
    return condition ? message : undefined;
  }