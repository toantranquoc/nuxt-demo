export default defineEventHandler(async (event) => {
  //   // Handle query params
  //   const { name } = getQuery(event);
  //   // Handle post params
  //   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_wvmSrTNbxwMRBO2Vuk7Yn9IgyBf01SWMGT7qryeK"
  );
  return data;
});
