import boat from "../assets/boat.png";
import boatTourImage from "../assets/boat-tour.png";
import hiking from "../assets/hiking.png";
import adiTouring from "../assets/adi-touring.png";
import islandWalk from "../assets/island-walk.png";
import islandFromBoat from "../assets/island-from-boat.png";
import fisher from "../assets/fisher.png";
import black from "../assets/black.png";

export interface ItineraryItem {
  step: number;
  title: string;
  description: string;
  duration: string;
  image: ImageMetadata ;
  imageAlt: string;
}

export const itineraryItems: ItineraryItem[] = [
  {
    step: 1,
    title: "Pick-up & Departure",
    description: "Your journey begins with a pick-up from Musanze or meet at the designated location. We'll ensure you're comfortable before heading to the lake.",
    duration: "30 minutes",
    image: boat,
    imageAlt: "Tour boat"
  },
  {
    step: 2,
    title: "Boat Ride to Batutsi Island",
    description: "Enjoy a scenic boat ride across the crystal-clear waters of Twin Lakes. Take in the breathtaking views of the surrounding volcanic mountains as we approach the island.",
    duration: "20 minutes",
    image: boatTourImage,
    imageAlt: "Boat tour on Twin Lakes"
  },
  {
    step: 3,
    title: "Mountain Hike",
    description: "Upon arrival, we'll embark on a short hike up the mountain. The trail offers panoramic views of both lakes and the surrounding landscape – perfect for photos!",
    duration: "45 minutes",
    image: hiking,
    imageAlt: "Hiking on Batutsi Island"
  },
  {
    step: 4,
    title: "Banana Beer Making",
    description: "Learn about the traditional process of making banana beer, a local specialty. You'll see how the islanders have preserved this cultural practice for generations.",
    duration: "30 minutes",
    image: black,
    imageAlt: "Banana beer making demonstration"
  },
  {
    step: 5,
    title: "Family Visit & Local Food",
    description: "Meet Abiathar's family and experience genuine Rwandan hospitality. Enjoy authentic local cuisine prepared with fresh ingredients from the island.",
    duration: "45 minutes",
    image: adiTouring,
    imageAlt: "Local hospitality"
  },
  {
    step: 6,
    title: "Community Tour",
    description: "Visit the island's church and school to learn about community life. Interact with locals and gain insights into their daily routines and traditions.",
    duration: "30 minutes",
    image: islandWalk,
    imageAlt: "Island community tour"
  },
  {
    step: 7,
    title: "Island Circumnavigation",
    description: "Board the boat again for a scenic ride around the islands, offering different perspectives and photo opportunities of this hidden gem.",
      duration: "30 minutes",
      image: fisher,
    
    imageAlt: "Island circumnavigation"
  },
  {
    step: 8,
    title: "Return Journey",
    description: "We'll head back to the mainland, where your transportation will be waiting to take you to your next destination.",
    duration: "20 minutes",
    image: islandFromBoat,
    
    imageAlt: "Return journey"
  }
];

export const totalDuration = "4 hours"; 