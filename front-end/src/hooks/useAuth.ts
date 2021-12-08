export const useSession = () => {
  return { user: localStorage.getItem("session") };
};

export const handleSetSession = (token: string) => {
  localStorage.setItem("session", token);
};

export const useDeleteSession = () => {
  localStorage.removeItem("session");
};
