// ============================================================
//  FAMILY DATA — Edit this file to add or update your family
// ============================================================
// See INSTRUCTIONS.md for a full guide on how to add people,
// unions (marriages/partnerships), and link story pages.

const FAMILY_DATA = {

  // ----------------------------------------------------------
  //  PEOPLE
  //  Each person has a unique id (e.g. "p1", "p2" …).
  //  Copy the template below and fill in the fields.
  // ----------------------------------------------------------
  people: {

    // ── Generation 1 ────────────────────────────────────────
    "p1": {
      id: "p1",
      firstName: "William",
      lastName: "Hartwell",
      birth: "1895",
      death: "1962",
      birthPlace: "Yorkshire, England",
      gender: "male",
      photo: "",                          // path to image, e.g. "assets/photos/william.jpg"
      pageFile: "people/william-hartwell.html",
      tagline: "The patriarch who crossed an ocean."
    },
    "p2": {
      id: "p2",
      firstName: "Eleanor",
      lastName: "Hartwell",
      maidenName: "Briggs",
      birth: "1898",
      death: "1971",
      birthPlace: "Lancashire, England",
      gender: "female",
      photo: "",
      pageFile: "people/eleanor-hartwell.html",
      tagline: "Keeper of letters and keeper of the faith."
    },

    // ── Generation 2 ────────────────────────────────────────
    "p3": {
      id: "p3",
      firstName: "George",
      lastName: "Hartwell",
      birth: "1921",
      death: "1988",
      birthPlace: "Boston, MA",
      gender: "male",
      photo: "",
      pageFile: "people/george-hartwell.html",
      tagline: "Served in the Pacific, came home to build a life."
    },
    "p4": {
      id: "p4",
      firstName: "Margaret",
      lastName: "Hartwell",
      maidenName: "Sullivan",
      birth: "1924",
      death: "2003",
      birthPlace: "Dublin, Ireland",
      gender: "female",
      photo: "",
      pageFile: "people/margaret-hartwell.html",
      tagline: "Brought Irish music to an English household."
    },
    "p5": {
      id: "p5",
      firstName: "Dorothy",
      lastName: "Crane",
      maidenName: "Hartwell",
      birth: "1923",
      death: "2010",
      birthPlace: "Boston, MA",
      gender: "female",
      photo: "",
      pageFile: "people/dorothy-crane.html",
      tagline: "Teacher, gardener, storyteller."
    },
    "p6": {
      id: "p6",
      firstName: "Robert",
      lastName: "Crane",
      birth: "1920",
      death: "1979",
      birthPlace: "Providence, RI",
      gender: "male",
      photo: "",
      pageFile: "people/robert-crane.html",
      tagline: "A quiet man with a loud laugh."
    },

    // ── Generation 3 ────────────────────────────────────────
    "p7": {
      id: "p7",
      firstName: "Thomas",
      lastName: "Hartwell",
      birth: "1948",
      death: "",
      birthPlace: "Boston, MA",
      gender: "male",
      photo: "",
      pageFile: "people/thomas-hartwell.html",
      tagline: "Still going strong at 76."
    },
    "p8": {
      id: "p8",
      firstName: "Carol",
      lastName: "Hartwell",
      maidenName: "Nguyen",
      birth: "1951",
      death: "",
      birthPlace: "Saigon, Vietnam",
      gender: "female",
      photo: "",
      pageFile: "people/carol-hartwell.html",
      tagline: "Arrived with a suitcase and a dream."
    },
    "p9": {
      id: "p9",
      firstName: "James",
      lastName: "Hartwell",
      birth: "1950",
      death: "2019",
      birthPlace: "Boston, MA",
      gender: "male",
      photo: "",
      pageFile: "people/james-hartwell.html",
      tagline: "The family historian before any of us knew it."
    },
    "p10": {
      id: "p10",
      firstName: "Anne",
      lastName: "Crane",
      maidenName: "Crane",
      birth: "1955",
      death: "",
      birthPlace: "Boston, MA",
      gender: "female",
      photo: "",
      pageFile: "people/anne-crane.html",
      tagline: "Lawyer, cook, force of nature."
    },

    // ── Generation 4 ────────────────────────────────────────
    "p11": {
      id: "p11",
      firstName: "Lily",
      lastName: "Hartwell",
      birth: "1978",
      death: "",
      birthPlace: "Cambridge, MA",
      gender: "female",
      photo: "",
      pageFile: "people/lily-hartwell.html",
      tagline: "Where the story continues."
    },
    "p12": {
      id: "p12",
      firstName: "Sam",
      lastName: "Hartwell",
      birth: "1981",
      death: "",
      birthPlace: "Cambridge, MA",
      gender: "male",
      photo: "",
      pageFile: "people/sam-hartwell.html",
      tagline: "Built this website. Hi, everyone."
    }
  },

  // ----------------------------------------------------------
  //  UNIONS  (marriages, partnerships, or parent relationships)
  //  partner1 + partner2 = the couple (use null if unknown)
  //  children = array of person ids
  // ----------------------------------------------------------
  unions: {
    "u1": {
      id: "u1",
      partner1: "p1",
      partner2: "p2",
      married: "1919",
      divorced: null,
      children: ["p3", "p5"]
    },
    "u2": {
      id: "u2",
      partner1: "p3",
      partner2: "p4",
      married: "1946",
      divorced: null,
      children: ["p7", "p9"]
    },
    "u3": {
      id: "u3",
      partner1: "p6",
      partner2: "p5",
      married: "1944",
      divorced: null,
      children: ["p10"]
    },
    "u4": {
      id: "u4",
      partner1: "p7",
      partner2: "p8",
      married: "1975",
      divorced: null,
      children: ["p11", "p12"]
    }
  },

  // The id of the person who should be centered on first load
  rootPerson: "p1"
};
