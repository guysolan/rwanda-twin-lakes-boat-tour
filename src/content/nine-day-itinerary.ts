import adiTouring from "../assets/adi-touring.png";
import hiking from "../assets/hiking.png";
import boat from "../assets/boat.png";
import brightLandscape from "../assets/bright-landscape.png";
import walkingTour from "../assets/walking-tour.png";
import boatTour from "../assets/boat-tour.png";
import islandWalk from "../assets/island-walk.png";

export interface NineDayItineraryItem {
  day: number;
  title: string;
  description: string;
  mainDestination: string;
  image: ImageMetadata;
  imageAlt: string;
  activities: string[];
}

export const nineDayItineraryItems: NineDayItineraryItem[] = [
  {
    day: 1,
    title: "Arrival & Kigali Genocide Memorial Tour",
    description: "After a short briefing from our driver guide upon arrival in the country, he will drive you to the Kigali genocide memorial from the Hotel with an en route lunch in the city. While in the memorial, go through the historical times of the tragedy of the 1994 Rwandan genocide against the Tutsis. Interact with the survivors and victims of the genocide for an insight into what unfolded in that dark year. Head to your booked hotel in Kigali, have dinner, and rest.",
    mainDestination: "Kigali Genocide Memorial (Kigali)",
    image: walkingTour,
    imageAlt: "Kigali city tour",
    activities: [
      "Pick-up at Kigali International Airport",
      "Check-in at Hotel in Kigali",
      "Kigali genocide memorial tour",
      "Interaction with survivors"
    ]
  },
  {
    day: 2,
    title: "Game Drive & Boat Cruise in Akagera National Park",
    description: "Have an early breakfast at your hotel. Journey east to Akagera for about 2 hours to begin your adventures in the park with a game drive safari. Expect animals like warthogs, hyenas, antelopes, zebras, giraffes, and the Big Five. As the sun goes overhead, enjoy your packed lunch inside the park in the presence of the wildlife. Drive south to Lake Ihema in the afternoon for a boat cruise experience that seeks to uncover the aquatic life of the park.",
    mainDestination: "Akagera National Park",
    image: brightLandscape,
    imageAlt: "Akagera National Park safari",
    activities: [
      "Game drive safari",
      "Big Five wildlife viewing",
      "Packed lunch in the park",
      "Boat cruise on Lake Ihema",
      "Crocodiles and hippos viewing"
    ]
  },
  {
    day: 3,
    title: "Drive to Volcanoes National Park & Twin Lakes",
    description: "Hit the road north to Northern Province immediately after your breakfast, where you will arrive at your booked lodge by noon for lunch. Drive to the Twin Lakes, located a few kilometers from the Volcanoes National Park feet. You will enjoy the beauty of twin lakes (Burera and Ruhondo lake) where you will have a small hike at the island. Take on a cultural tour while at this cultural village as you spot the unspoiled traditions of the people of Rwanda.",
    mainDestination: "Volcanoes National Park",
    image: islandWalk,
    imageAlt: "Twin Lakes and volcanic landscape",
    activities: [
      "Drive to Northern Province",
      "Twin Lakes visit (Burera and Ruhondo)",
      "Island hike",
      "Cultural village tour",
      "Banana beer experience",
      "Traditional dance",
      "Local meal experience"
    ]
  },
  {
    day: 4,
    title: "Gorilla Trekking & Dian Fossey Museum",
    description: "At clockcrow, have breakfast and drive to the park offices for a pre-trekking briefing. This briefing is meant to prepare you for what lies ahead beneath the jungles of Volcanoes National Park. A ranger will lead you and the search for the mountain gorillas will begin. Later, upon locating them, an hour will be given to you to spend in their presence, taking pictures, and videos as they go about their day. Explore the Dian Fossey Museum in the afternoon.",
    mainDestination: "Volcanoes National Park",
    image: hiking,
    imageAlt: "Mountain gorilla trekking",
    activities: [
      "Pre-trekking briefing",
      "Mountain gorilla trekking",
      "One hour with gorillas",
      "Photography and video",
      "Dian Fossey Museum visit"
    ]
  },
  {
    day: 5,
    title: "Arrive at Lake Kivu & Beach Relaxation",
    description: "Midway through your 9 days of adventure, leave your lodge in Volcanoes National Park after breakfast and drive to Lake Kivu. This is a short but very adventurous journey filled with incredible scenic views of endless rolling hills and mountains that stretch to the horizon. Arrive at your booked beach hotel just in time for lunch. Venture through the snow-white beaches, depicting a relaxing mood as the cool breeze washes you from the lake.",
    mainDestination: "Lake Kivu",
    image: boat,
    imageAlt: "Lake Kivu scenic views",
    activities: [
      "Scenic drive to Lake Kivu",
      "Beach hotel check-in",
      "Beach relaxation",
      "Virunga Mountains backdrop views"
    ]
  },
  {
    day: 6,
    title: "Coffee Plantation Tour & Boat Cruise",
    description: "Wake up to a delicious breakfast at your beach hotel on the shores of Lake Kivu and then drive off to the coffee plantations in the neighboring communities for a coffee tour. While at the coffee plantations, the local coffee guide will take you through the steps of coffee planting and production into a finished product. In the afternoon, embark on a boat cruise experience on Lake Kivu for a clearer picture of what the lake offers.",
    mainDestination: "Lake Kivu",
    image: boatTour,
    imageAlt: "Coffee plantation and Lake Kivu boat cruise",
    activities: [
      "Coffee plantation tour",
      "Coffee production process",
      "Fresh coffee tasting",
      "Lake Kivu boat cruise",
      "Small islands exploration",
      "Fishermen observation"
    ]
  },
  {
    day: 7,
    title: "Travel to Nyungwe National Park",
    description: "After your last delicious breakfast at the beach hotel at Lake Kivu, check out and head south of the country to Nyungwe National Park. There will be a stopover in the city for a quick lunch en route to a local dish as you interact with the locals. Proceeding to the park, enjoy the views of the countryside with beautiful, tall tropical rainforest.",
    mainDestination: "Nyungwe National Park",
    image: brightLandscape,
    imageAlt: "Journey to Nyungwe National Park",
    activities: [
      "Check out from Lake Kivu",
      "Scenic drive south",
      "Local lunch stopover",
      "Tropical rainforest views",
      "Lodge check-in"
    ]
  },
  {
    day: 8,
    title: "Chimpanzee Trekking & Canopy Walk",
    description: "This adventure of chimpanzee trekking begins from the park offices with a short briefing about the rules and regulations. A lead ranger then directs you on a path to the jungles of the park, looking for the chimpanzees. Upon locating them, an hour will be assigned to spend in their presence, watching them as they play, feed, and rest. Start your afternoon with a canopy walk on the suspended 70-meter-high canopy trails that overlook the entire park.",
    mainDestination: "Nyungwe National Park",
    image: hiking,
    imageAlt: "Chimpanzee trekking and canopy walk",
    activities: [
      "Chimpanzee trekking briefing",
      "Jungle trek with ranger",
      "One hour with chimpanzees",
      "70-meter-high canopy walk",
      "Park overview from canopy"
    ]
  },
  {
    day: 9,
    title: "Departure to Kigali",
    description: "Depart for Kigali City immediately after breakfast and check out from your lodge in Nyungwe National Park to finalize your 9 days Akagera National Park, Nyungwe, Kivu, and Volcanoes National Park tour. By noon, arrive in the city and have lunch before proceeding to Kigali International Airport for your departure back home.",
    mainDestination: "Kigali",
    image: adiTouring,
    imageAlt: "Departure from Kigali",
    activities: [
      "Check out from Nyungwe",
      "Drive to Kigali",
      "City lunch",
      "Airport transfer",
      "Departure"
    ]
  }
];

export const tourTitle = "9-Day Akagera, Nyungwe, Lake Kivu & Volcanoes National Park Tour";
export const totalDuration = "9 days / 8 nights";
export const tourHighlights = [
  "Kigali Genocide Memorial experience",
  "Big Five safari in Akagera National Park",
  "Mountain gorilla trekking in Volcanoes National Park",
  "Twin Lakes cultural experience",
  "Lake Kivu beach relaxation",
  "Coffee plantation tour",
  "Chimpanzee trekking in Nyungwe",
  "70-meter-high canopy walk",
  "Comprehensive Rwanda cultural immersion"
];