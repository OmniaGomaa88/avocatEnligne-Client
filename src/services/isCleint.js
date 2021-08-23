export function isClientRendezVous() {
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("isClient") === "true"
  ) {
    return true;
  }
  return false;
}
