
export function onError(error: any) { 
    let message = String(error);

    if (!(error instanceof Error) && error.message) { 
        message = String(error.message);
    } 
    alert(message); 
}

/* GPT
interface CustomError extends Error {
  code?: string;
}

export function onError(error: unknown): void {
  if (error instanceof Error) {
    console.error(error.message);
    // If you also want to log the error code
    if ('code' in error) {
      console.error(`Error code: ${(error as CustomError).code}`);
    }
  } else if (typeof error === 'object' && error !== null && 'message' in error) {
    const customError = error as CustomError;
    console.error(String(customError.message));
    if ('code' in customError) {
      console.error(`Error code: ${String(customError.code)}`);
    }
  } else {
    console.error(String(error));
  }
}
*/