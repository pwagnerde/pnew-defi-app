import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x557c8B3E5Ac61ba7fB1E9BA03dDcDe3696d5Ce00"
);

export default instance;
