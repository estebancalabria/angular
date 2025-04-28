
export default interface PartidoModel {
    venue:string;
    datetime: Date;
    home_team: { country: string, code: string; goals:number };
    away_team: { country: string, code: string; goals:number };
    winner : string;
}
