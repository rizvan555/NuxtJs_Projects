//for get this file to work, we must to write localhost:3000/api/hello in the browser and we get JSON response

export default defineEventHandler((event: any) => {
  return {
    hello: 'world',
  };
});
