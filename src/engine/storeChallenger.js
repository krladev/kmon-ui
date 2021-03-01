export const storeChallenger = (challenger) => {
    localStorage.setItem('challenger', JSON.stringify(challenger));
}