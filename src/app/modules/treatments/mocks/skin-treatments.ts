export const SKIN_TREATMENTS: any = [
  {
    title: 'Skin Consultation with Cinzia',
    hasShowcase: false,
    treatment: ``,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '30 mins' },
      { key: 'Single', value: '£50' }
    ],
    new: true
  },
  {
    title: 'Bespoke Facial with Cinzia',
    hasShowcase: false,
    treatment: `This treatment is made by appointment only, to book please call: 020 7820 1177 or email: info@beautiskinclinic.com`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    bespoke: true,
    options: [
      { key: 'Duration', value: '180 mins' },
      { key: 'Single', value: '£300' }
    ],
    new: true
  },
  {
    title: 'Advanced Beauti Signature Relaxing Facial',
    hasShowcase: true,
    treatment: `
    Choose from Radio Frequency, Skin Rejuvenation, LED Light Therapy.<br /> Add Dermaplaning for £30, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '75 mins' },
      { key: 'Single', value: '£150' },
      {
        key: '6 Courses',
        value: '£900'
      }
    ],
    new: true
  },
  {
    title: 'Aqua 3 Hydrotherapy Facial',
    hasShowcase: true,
    treatment: `
    Choose from Deep-cleaning, Anti-Aging. <br />Add Black Head Extraction for £10, (extra 10 mins)
    <br />Add LED Light Therapy for £20, (extra 15 mins)<br />Add Dermaplaning for £30, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      {
        key: 'Duration',
        value: '60 mins'
      },
      {
        key: 'Single',
        value: '£130'
      },
      {
        key: '3 Courses',
        value: '£351'
      },
      {
        key: '6 Courses',
        value: '£663'
      }
    ]
  },
  {
    title: `Skin Peel`,
    hasShowcase: true,
    treatment: `Add LED Light Therapy for £20, (extra 15 mins)`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£120' },
      { key: '3 Courses', value: '£324' },
      { key: '6 Courses', value: '£612' }
    ]
  },
  {
    title: `Radio Frequency Skin Tightening`,
    treatment: `Add LED Light Therapy for £20, (extra 15 mins)<br /> Add Dermaplaning for £30, (extra 15 mins)	`,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£120' },
      { key: '3 Courses', value: '£324' },
      { key: '6 Courses', value: '£612' }
    ]
  },
  {
    title: `Beauti Fusion Mesotherapy`,
    treatment: `Add Dermaplaning for £30, (extra 15 mins)<br />
     Add LED Light Therapy for £20, (extra 15 mins)`,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    fullOptions: 'true',
    options: [
      {
        treatment: '                            ',
        options: [
          { key: '   Duration', value: '' },
          { key: '   1 course', value: '' },
          { key: '   4 courses', value: '' },
        ]
      },
      {
        treatment: `    Face Meso`,
        options: [
          { key: '', value: '    60 mins' },
          { key: '', value: '    £300' },
          { key: '', value: '    £1080' },
        ]
      },
      {
        treatment: `Neck & Decolletage`,
        options: [
          { key: '', value: '60 mins' },
          { key: '', value: '£350' },
          { key: '', value: '£1260' },
        ]
      },
    ]
  },
  {
    title: 'IPL Skin Rejuvenation',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '30 mins' },
      { key: 'Single', value: '£110' },
      { key: '3 Courses', value: '£297' },
      { key: '6 Courses', value: '£561' }
    ],
  },
  {
    title: 'Micro-Needling with Dermapen',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Duration', value: '60 mins' },
      { key: 'Single', value: '£200' },
      { key: '4 Courses', value: '£720' }
    ]
  },
  {
    title: 'Anti-Wrinkle Injections',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `One Area`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£175' },
        ]
      },
      {
        treatment: `Two Areas`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£250' },
        ]
      },
      {
        treatment: `Three Areas`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£325' },
        ]
      },
    ]
  },
  {
    title: 'Dermal Fillers',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `Lip Filler`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£190' },
        ]
      },
      {
        treatment: `Marionette Filler`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£190' },
        ]
      },
      {
        treatment: `Laugh Line Filler`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£250' },
        ]
      },
    ]
  },
  {
    title: 'Plasma Face Lift',
    hasShowcase: true,
    treatment: `Prices below include one free top up session`,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    orientation: 'row',
    options: [
      {
        treatment: `Upper Eye`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' },
        ]
      },
      {
        treatment: `Lower Eye`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£350' },
        ]
      },
      {
        treatment: `Upper and Lower Eye`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£600' },
        ]
      },
      {
        treatment: `Upper Lip`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' }
        ]
      },
      {
        treatment: `Lower Lip`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£350' },
        ]
      },
      {
        treatment: `Brow Lift`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£450' },
        ]
      },
      {
        treatment: `Nasal Labia`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£500' }
        ]
      },
      {
        treatment: `Crow Feet`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£550' },
        ]
      },
      {
        treatment: `Neck`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£900' }
        ]
      },
      {
        treatment: `Jawline`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£100' },
        ]
      },
      {
        treatment: `Full Face`,
        description: `Lorem of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy
        text ever since the 1500s, when an unknown printer`,
        options: [
          { key: 'Duration', value: '60 mins' },
          { key: 'Single', value: '£2000' },
        ]
      }
    ]
  },
  {
    title: 'TriBella',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Single', value: '£520' },
      { key: '*Introductory price', value: '£364' },
      { key: '3 Courses', value: '£1404' },
      { key: '*Introductory price' , value: '£1193' }
    ]
  },
  {
    title: 'Skin Resurfacing',
    treatment: ``,
    hasShowcase: true,
    description: `Lorem of the printing and typesetting industry.
    Lorem Ipsum has been the industry’s standard dummy
    text ever since the 1500s, when an unknown printer`,
    options: [
      { key: 'Single', value: '£300' },
      { key: '*Introductory price', value: '£210' },
      { key: '3 Courses', value: '£810' },
      { key: '*Introductory price' , value: '£689' }
    ]
  }
];
