import { main } from './insights/main'

(async () =>{
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.log(e);
    process.exit(1)
  }
})()