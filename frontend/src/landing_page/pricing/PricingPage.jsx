import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import AccountCharges from "./AccountCharges";
export default function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <AccountCharges />
    </>
  );
}
