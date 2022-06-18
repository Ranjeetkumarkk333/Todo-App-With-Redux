import { State } from "../store";



export const userSelector = (s:State) => {
  return Object.keys(s.users).map(id=>s.users[id as any])
};
