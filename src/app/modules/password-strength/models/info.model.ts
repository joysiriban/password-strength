export interface PasswordInfoInterface {
   score: number;
   guessTimeSeconds: number;
   guessTimeString: string;
   warning: string;
   suggestions: Array<string>; 
}