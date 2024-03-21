export type Team = {
  id: number;
  name: string;
  description?: string;
}

export type game = {
  id: number;
  hometeam: string;
  awayteam: string;
  description?: string;
}