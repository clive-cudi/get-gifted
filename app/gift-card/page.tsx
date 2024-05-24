import { BrandCard } from "@/components/BrandCard";
import { GiftCardPoster } from "@/components/GiftCardPoster";
import { InfoStrip } from "@/components/InfoStrip";
import { Button, Collapse } from "antd";
import Image from "next/image";
import { brands, infoStripItems } from "@/components/static";

const GiftCardPage = () => {
  return (
    <div className="flex flex-col h-fit w-full items-center">
      <section className="flex w-full h-fit p-20 max-w-7xl">
        <div className="flex flex-col w-1/2 h-fit gap-y-7">
          {/* flexi-card */}
          <div className="flex w-full h-fit">
            <GiftCardPoster
              imageURL="https://source.unsplash.com/random"
              variant="xl"
            />
          </div>
          <div className="flex flex-col w-full h-fit gap-y-3.5">
            {infoStripItems.map((is_item) => (
              <InfoStrip label={is_item.label} icons={is_item.icons} />
            ))}
          </div>
          <div className="flex flex-col w-full h-fit gap-y-4">
            <Button
              type={"primary"}
              className="h-11 rounded-full w-fit bg-primary-deep-blue"
            >
              Buy now
            </Button>
            <span>Want to buy more than 10 cards</span>
            <span>Get a quote</span>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-fit">
          {/* global experiences card */}
          <h1 className="text-7xl font-bold leading-tight">
            Global Experiences Card
          </h1>
          <p className="font-medium mt-3.5 leading-tight">
            The Global Experiences Card Powered by Viator, a Tripadvisor Company
            is redeemable at www.globalexperiencescard.com towards over 350,000
            tours, activities, attractions, events, and experiences worldwide in
            over 200 countries and territories. Explore endless possibilities.
          </p>
          <Collapse
            className="bg-transparent border-transparent mt-5"
            items={[
              {
                key: "1",
                label: (
                  <div className="flex h-fit items-center">
                    <span className="flex relative h-12 aspect-square">
                      <Image
                        src={"/icons/instant_delivery_icon.svg"}
                        alt=">"
                        fill
                      />
                    </span>
                    <h1>Instant delivery</h1>
                  </div>
                ),
                children: (
                  <p>
                    Get an instant digital delivery to your self or the
                    recipient via SMS, Email or Social Media. Physical
                    deliveries available within 5 business days (Europe).
                  </p>
                ),
              },
              {
                key: "2",
                label: (
                  <div className="flex h-fit items-center">
                    <span className="flex relative h-12 aspect-square">
                      <Image src={"/icons/free_returns.svg"} alt=">" fill />
                    </span>
                    <h1>30 Days free returns</h1>
                  </div>
                ),
                children: (
                  <p>
                    Return any unactivated gift cards within 30 days for free.
                    Most gift cards can also be swapped by the recipient to
                    another brand.
                  </p>
                ),
              },
              {
                key: "3",
                label: (
                  <div className="flex h-fit items-center">
                    <span className="flex relative h-12 aspect-square">
                      <Image src={"/icons/personalize.svg"} alt=">" fill />
                    </span>
                    <h1>Personalize with a text, image or video</h1>
                  </div>
                ),
                children: (
                  <p>
                    Make the gift more personal by adding a text, image or a
                    video that is shown to the recipient when unwrapping the
                    gift card.
                  </p>
                ),
              },
            ].map((item) => ({ ...item, showArrow: false }))}
          ></Collapse>
          <span>See more FAQs</span>
        </div>
      </section>
      <section className="flex flex-col w-full h-fit p-20 gap-y-8 max-w-7xl">
        <div className="flex w-full h-fit">
          <h1 className="text-6xl font-bold leading-tight">Related Brands</h1>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4">
          {brands.map((brand) => (
            <BrandCard {...brand} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GiftCardPage;
