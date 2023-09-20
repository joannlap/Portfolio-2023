export const useWorkStore = definePiniaStore("work-store", {
  state: () => ({
    work: [
      {
        id: 1,
        title:
          "Coke Studio presents: 50 years hiphop tribute powered by Foundation",
        headerImage: "/images/work/project-thumbnails/LL-tribute.png",
        headerImageAlt: "TO BE FILLED",
        client: "Foundation Amsterdam Hiphop Academy",
        date: "July 2023",
        tags: ["Motion Design"],
        description:
          "August 2023 marks 50 years of Hiphop. Hiphop is known for its rich cultural history in music. Coke studio presents 50 years of Hiphop Tribute show in collaboration with Lowlands and Foundation Amsterdam Hiphop Academy. As part of the tribute show, an intro video reveals a short timeline of pioneers with big influences in Hiphop music. The video was a compilation of various interviews and music clips, in combination with text motion.",
        images: [
          ["/images/work/LL-tribute/Lowlands-50yrs-hiphop-intro_3.mp4", "/images/work/LL-tribute/LL-tribute.png"],
          "/images/work/LL-tribute/73broke.jpg",
          "/images/work/LL-tribute/electrifying.jpg",
          "/images/work/LL-tribute/koolherc.jpg",
          "/images/work/LL-tribute/LL-1.jpg",
        ],
        imageGridSize: [1, 1],
        gridLayout: "100%",
        mobileLayout: "1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 2,
        title: "Foundation Bootcamp 2023",
        headerImage: "/images/work/project-thumbnails/FD-Bootcamp.png",
        headerImageAlt: "TO BE FILLED",
        client: "Foundation Amsterdam Hiphop Academy",
        date: "March-July 2023",
        tags: ["Graphic design", "Motion design", "3D"],
        description:
          "A lot of sweat, growth, pain, bodywork, brainwork, love and knowledge easily summarizes Foundation Bootcamp. Every summer Foundation Hiphop Academy holds a 3 week intensive bootcamp where dancers can dive into the elements of street and club culture. With more than 60 workshops in different street styles, parties, lectures, debates and an evaluation program called the Hawks Method. Foundation bootcamp visual language originated from street- and pop art. My inspiration where based from old hiphop/street magazines, graffiti art and movie posters. The approach was a city view, combined into an assemble of Avengers  ",
        images: [
          "/images/work/FD-Bootcamp/FD-BOOTCAMP2023-FEED.jpg",
          "/images/work/FD-Bootcamp/gifbootcamps.gif",
          "/images/work/FD-Bootcamp/arjun.jpg",
          "/images/work/FD-Bootcamp/frankwa.jpg",
          "/images/work/FD-Bootcamp/jimmyyudat.jpg",
          "/images/work/FD-Bootcamp/josephgo.jpg",
          "/images/work/FD-Bootcamp/mamson.jpg",
          "/images/work/FD-Bootcamp/nedda.jpg",
          "/images/work/FD-Bootcamp/suzume.jpg",
          "/images/work/FD-Bootcamp/willow.jpg",
          "/images/work/FD-Bootcamp/yugson.jpg",
          ["/images/work/FD-Bootcamp/btcmp-promo.mp4", "/images/work/FD-Bootcamp/btcmp-promo.png"],
          ["/images/work/FD-Bootcamp/btcmp-teaser_3.mp4", "/images/work/FD-Bootcamp/btcmp-teaser.jpg"],
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W1.jpg",
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W2.jpg",
          "/images/work/FD-Bootcamp/FD-BOOTCAMP-SCHEDULE-W3.jpg",
        ],
        mobileLayout:
          "1fr / 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr /  1fr / 1fr / 1fr",
        desktopLayout:
          "1.2fr 0.8fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 3,
        title: "Nightowls x Kwaku Festival",
        headerImage: "/images/work/project-thumbnails/Nightowls.png",
        headerImageAlt: "TO BE FILLED",
        client: "Foundation Amsterdam Hiphop Academy",
        date: "July 2023",
        tags: ["Graphic design"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor sapien eget metus facilisis ornare. Donec aliquam elit non est tincidunt, quis vehicula eros imperdiet. Proin efficitur maximus lorem et malesuada. In hac habitasse platea dictumst. Mauris mollis neque quis ullamcorper rutrum. Proin semper, metus dignissim facilisis suscipit, ante odio tinc",
        images: [
          "/images/work/nightowls/kwaku-2023-poster.jpg",
          "/images/work/nightowls/kwaku-0508-story.jpg",
          "/images/work/nightowls/Nightowls_Kwaku-3.jpg",
          "/images/work/nightowls/Nightowls_Kwaku-v3.jpg",
        ],
        imageGridSize: [1, 2],
        mobileLayout: "1fr / 1fr / 1fr / 1fr",
        desktopLayout: "64% 36% / 41.4% 58.6%",
      },
      {
        id: 4,
        title: "Yeye: African Diasporic music",
        headerImage: "/images/work/project-thumbnails/YEYE.png",
        headerImageAlt: "TO BE FILLED",
        client: "Yeye",
        date: "April-June 2023",
        tags: ["Motion design"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor sapien eget metus facilisis ornare. Donec aliquam elit non est tincidunt, quis vehicula eros imperdiet. Proin efficitur maximus lorem et malesuada. In hac habitasse platea dictumst. Mauris mollis neque quis ullamcorper rutrum. Proin semper, metus dignissim facilisis suscipit, ante odio tinc",
        images: [
          ["/images/work/yeye/landscape.mp4", "/images/work/yeye/yeye-logo.png"],
          "/images/work/yeye/yeye-pattern1.png",
          "/images/work/yeye/yeye-pattern2.png",
          "/images/work/yeye/yeye-pattern3.png",
        ],
        imageGridSize: [1, 1],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr / 1fr / 1fr / 1fr",
      },
      {
        id: 5,
        title: "Foundation x OBA: Hiphop is Erfgoed",
        headerImage: "/images/work/project-thumbnails/HHisErfgoed.png",
        headerImageAlt: "TO BE FILLED",
        client: "Foundation Hiphop Academy",
        date: "February - July 2023",
        tags: ["Graphic design"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor sapien eget metus facilisis ornare. Donec aliquam elit non est tincidunt, quis vehicula eros imperdiet. Proin efficitur maximus lorem et malesuada. In hac habitasse platea dictumst. Mauris mollis neque quis ullamcorper rutrum. Proin semper, metus dignissim facilisis suscipit, ante odio tinc",
        images: [
          "/images/work/HHisErfgoed/fd-lecture-poster.jpg",
          "/images/work/HHisErfgoed/HHerfgoed-sugacane-feed.jpg",
          "/images/work/HHisErfgoed/HHerfgoed-ArjunChadha-feed.jpg",
          "/images/work/HHisErfgoed/debat-juni-geel-feed.jpg",
          "/images/work/HHisErfgoed/debat-juni-geel-story.jpg",
          "/images/work/HHisErfgoed/debat-poster-maart-feed.jpg",
          "/images/work/HHisErfgoed/debat-poster-maart-story.jpg",
          "/images/work/HHisErfgoed/lecture29JULY-04.jpg",
        ],
        imageGridSize: [1, 2],
        mobileLayout: "1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr / 1fr",
        desktopLayout: "1fr / 1fr 1fr / 1.3fr .7fr / 1.3fr .7fr / .7fr .7fr",
      },
      {
        id: 6,
        title: "Foundation Hiphop Academy",
        headerImage: "/images/work/project-thumbnails/Foundation.png",
        headerImageAlt: "TO BE FILLED",
        client: "Foundation Hiphop Academy",
        date: "January 2023 - ongoing",
        tags: ["Graphic design"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor sapien eget metus facilisis ornare. Donec aliquam elit non est tincidunt, quis vehicula eros imperdiet. Proin efficitur maximus lorem et malesuada. In hac habitasse platea dictumst. Mauris mollis neque quis ullamcorper rutrum. Proin semper, metus dignissim facilisis suscipit, ante odio tinc",
        images: [
          "/images/work/foundation/fd-ketikoti-story.jpg",
          "/images/work/foundation/foundation-jam-poster-story.jpg",
          "/images/work/foundation/Instastory-dj-chainsaw-adv.jpg",
          "/images/work/foundation/Instastory-dj-luckyjones-1.jpg",
          "/images/work/foundation/Instastory-HH-kelly.jpg",
          "/images/work/foundation/Instastory-HH-Mosey.jpg",
          "/images/work/foundation/Instastory-house-miguel.jpg",
          "/images/work/foundation/Instastory-house-nedda.jpg",
          "/images/work/foundation/kidsclass-afro-story.jpg",
          "/images/work/foundation/story-house-amisha-THUR.jpg",
          "/images/work/foundation/story-house-kelly.jpg",
        ],
        imageGridSize: [2, 3],
        mobileLayout:
          "1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr 1fr / 1fr",
        desktopLayout:
          "1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr / 1fr 1fr 1fr",
      },
    ],
  }),
  getters: {
    getWork: (state) => state.work,
    getWorkItem: (state) => (title: string) =>
      state.work.find(
        (workItem) => workItem.title.toLowerCase() === title.toLowerCase()
      ),
  },
  actions: {},
});
