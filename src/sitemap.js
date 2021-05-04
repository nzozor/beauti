const convert = require('xml-js'),
  fs = require('fs'),
  options = {
    compact: true,
    ignoreComment: true,
    spaces: 4
  },
  moment = require('moment');
const url = 'https://www.beautiskinclinic.com';

const projects = [
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f0f610a08c9d76a3f0e41bb",
  "name": "Aqua 3 Hydrotherapy Facial",
  "content": "#### What is Aqua 3 Hydrotherapy Facial?\n\nThe Aqua-3 hydrotherapy facial combines the latest technology with the cleansing power of a water-based peel, microdermabrasion and transdermal delivery of active ingredients. \n\nThis three-in-one treatment deeply cleanses, moisturises and rejuvenates your skin to leave it glowing and smooth, with fewer imperfections. \n\nIt is suitable for all skin types, including sensitive skin, and is tailored to your specific concerns. It visibly improves a range of skin issues, including ageing skin, acne, congestion, sebum imbalances, skin imperfections, thickened skin and scars. \n\nYou will see noticeable results after one treatment; however, a course of at least three treatments, 3-4 weeks apart, is advisable for long-term results. \n\nYou can choose to combine the following add-on treatments to enhance the effects of the Aqua-3 hydrotherapy facial:\n\n- Black Head Extraction\n- Dermaplaning for an extra-smooth finish\n- LED Light Therapy to soothe skin and boost rejuvenation by stimulating collagen production\n  \n#### What should I expect after the treatment?\n\nAfter the first treatment, your skin will appear noticeably smoother and glowing. There may be some temporary redness due to improved circulation. Sometimes, the skin may flake for 2-3 days as it sheds dead cells, which is normal. After this, skin quality is improved. \n\n#### What is the after care?\n\nAvoid sun exposure for 48 hours after this treatment. It is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- One Aqua-3 hydrotherapy facial costs £130.\n- A course of three treatments costs £351.\n- A course of six treatments costs £663.",
  "createdAt": "2020-07-15T20:03:22.454Z",
  "updatedAt": "2021-04-24T16:22:09.877Z",
  "__v": 0,
  "slug": "Aqua-3-Hydrotherapy-Facial",
  "title": "Aqua 3 Hydrotherapy Facial",
  "treatment": "5f195639fa13db36662a2490",
  "treatmentParent": "5f195639fa13db36662a2490",
  "parent": {
  "images": [],
  "_id": "5f195639fa13db36662a2490",
  "title": "Advanced Skin Treatments",
  "slug": "Advanced-Skin-Treatments",
  "createdAt": "2020-07-23T09:19:53.138Z",
  "updatedAt": "2020-07-23T09:19:53.138Z",
  "__v": 0,
  "id": "5f195639fa13db36662a2490"
  },
  "id": "5f0f610a08c9d76a3f0e41bb"
  },
  {
  "images": [],
  "_id": "5f1955cefa13db36662a248f",
  "title": "Skin Treatments",
  "slug": "Skin-Treatments",
  "createdAt": "2020-07-23T09:18:06.145Z",
  "updatedAt": "2020-07-23T09:18:06.145Z",
  "__v": 0,
  "id": "5f1955cefa13db36662a248f"
  },
  {
  "images": [],
  "_id": "5f195639fa13db36662a2490",
  "title": "Advanced Skin Treatments",
  "slug": "Advanced-Skin-Treatments",
  "createdAt": "2020-07-23T09:19:53.138Z",
  "updatedAt": "2020-07-23T09:19:53.138Z",
  "__v": 0,
  "id": "5f195639fa13db36662a2490"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f449d0b64acc003bf4311fc",
  "content": "#### What is a Skin Peel?\n\nSkin peels, also known as chemical peels, can rejuvenate your skin and boost radiance. They can also target sun damage, acne, scarring, rosacea, fine lines, open pores, brown spots and more.\n\nDuring a peel, a natural acid is applied to the skin. This removes the dead cells on the surface to reveal fresher, softer skin. Peels stimulate the production of collagen, which helps keep the skin plump and elastic. They can also even out melanin (skin pigmentation). \n\nSkin peels are suitable for anyone looking to refresh and revive their skin. They can visibly improve a range of conditions, including ageing skin, acne, brown spots, sun damage and scars.  They are suitable for all skin types and can be tailored to specific concerns. Skin peels can even help strengthen the skin and reduce sensitivity.\n\nThe number of treatments depends on your particular skin concern. For issues such as ageing skin, hyperpigmentation (brown patches), or acne, a course of two or more treatments may be needed. Your therapist will be able to advise you on this.\n\nYou can choose to combine the following add-on treatments to enhance the effects of the Skin Peel:\n\n- Dermaplaning for an extra-smooth finish\n- LED Light Therapy to soothe skin and boost rejuvenation by stimulating collagen production\n  \n#### What should I expect after the treatment?\n\nYou might experience some temporary redness and irritation. After this your skin will look smooth and radiant. \n\n#### What is the after care?\n\nAvoid sun exposure for 48 hours after this treatment. It is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- One peel costs £120.\n- A course of three peels costs £324.\n- A course of six peels costs £612.",
  "title": "Skin Peel",
  "slug": "Skin-Peel",
  "createdAt": "2020-08-25T05:09:31.716Z",
  "updatedAt": "2021-04-24T16:22:31.536Z",
  "__v": 0,
  "id": "5f449d0b64acc003bf4311fc"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f449de964acc003bf4311fe",
  "content": "#### What is Radio Frequency Skin Tightening?\n\nRadio frequency works by delivering heat into the deeper layers of the skin, which stimulates collagen production. Boosting the number of collagen fibres tightens, lifts and plumps up the skin. \n\nThis treatment is suitable for anyone looking for more youthful, radiant skin. It is ideal for wrinkles, lines, sagging and enlarged pores. It can also make dull skin look dewier and more radiant and can prevent or delay the first signs of ageing.\n\nA course of at least six weekly treatments is recommended to see visible and long-lasting effects. Your therapist can advise you on the appropriate number of treatments for your particular concern. Many clients repeat a course once or twice a year to maintain the effects.\n\nYou can choose to combine the following add-on treatments to enhance the effects of the Radio Frequency Skin Tightening:\n\n- Dermaplaning for an extra-smooth finish\n- LED Light Therapy to soothe skin and boost rejuvenation by stimulating collagen production\n  \n#### What should I expect after the treatment?\n\nYou may experience some redness, swelling and mild heat for a few hours after the treatment. \n\nMany people see a tightening effect after their first treatment; however, as radiofrequency promotes collagen production for up to 6 weeks following a treatment, you will continue to see improvements in your skin for weeks afterwards.\n\n#### What is the after care?\n\nKeep hydrated after your radiofrequency skin tightening treatments by drinking water. If your skin feels hot after the treatment, a cooling gel can help. It is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- One radiofrequency treatment costs £120.\n- A course of three treatments costs £324.\n- A course of six treatments costs £612.",
  "title": "Radio Frequency Skin Tightening",
  "slug": "Radio-Frequency-Skin-Tightening",
  "createdAt": "2020-08-25T05:13:13.788Z",
  "updatedAt": "2021-04-24T16:22:42.293Z",
  "__v": 0,
  "id": "5f449de964acc003bf4311fe"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f449e7664acc003bf431200",
  "content": "#### What is Advanced Beauty Signature Relaxing Facial?\n\nThis is a must-try treatment at Beauti created by our founder and Aesthetician Cinzia Campigotto. It combines our most relaxing signature facial with the latest non-invasive light technology to produce visible results after the first treatment, effectively targeting the signs of ageing, wrinkles and sagging skin. It is an instant skin booster before any big event. This treatment is suitable for any skin type.\n\nYou can choose to combine the following advanced skin treatments with our signature relaxing facial:\n\n- **Radio Frequency**: This delivers energy and heat into the skin and is effective for skin tightening and wrinkle reduction. It stimulates collagen production, which plumps up the skin and boosts elasticity. \n- **Skin Rejuvenation**: Intense pulsed light (IPL) skin rejuvenation works by delivering targeted pulses of light deep into the skin. It can improve the appearance of skin imperfections such as fine lines, wrinkles, sun damage, brown spots, scars, open pores, visible veins and discolouration. \n- **LED Light Therapy**: LED light triggers the skin’s natural repair process. It is ideal for skin rejuvenation, acne, sun damage, rosacea, eczema, dermatitis and any inflammatory condition. It also helps to restore radiance.\n  \n#### What should I expect after the treatment?\n\nAfter the first treatment, lines and wrinkles will be softened. Skin will look plumper, more radiant and visibly firm, with fewer imperfections. You may experience some temporary redness due to improved blood circulation.\n\n#### What is the after care?\n\nAvoid sun exposure for 48 hours after this treatment. It is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- One treatment costs £150. ",
  "title": "Advanced Beauti Signature Relaxing Facial",
  "slug": "Advanced-Beauti-Signature-Relaxing-Facial",
  "createdAt": "2020-08-25T05:15:34.600Z",
  "updatedAt": "2021-03-23T11:52:16.427Z",
  "__v": 0,
  "id": "5f449e7664acc003bf431200"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f449f5264acc003bf431202",
  "content": "#### What is Mesotherapy?\n\nMesotherapy can address skin concerns such as wrinkles, pigmentation, sun damage, sagging, scarring and stretch marks. It is also ideal for restoring radiance and hydrating, nourishing and plumping up the skin. \n\nIn this treatment, active ingredients (such as, vitamins, growth factors and peptides) are delivered deep into the skin using a tiny needle. \n\nIt is suitable for all skin types and ages. The number of treatments needed will depend on your particular skin concern. For best results, 3 to 6 treatments spaced every X weeks are usually recommended.\n  \n#### What should I expect after the treatment?\n\nMost people see a difference after their first treatment. The effects are ongoing and you will continue to see improvements after each session, and for weeks after the course has finished.\n\nYou may experience temporary redness, moderate swelling and sensitivity after mesotherapy. \n\n#### What is the after care?\n\nIt is advisable to avoid strenuous exercise and keep away from excessive heat and sun exposure after your treatment. \n\n#### How much does it cost?\n\nFace\n\n- One treatment costs £300.\n- A course of four treatments costs £1,080.\n\nNeck and décolletage\n\n- One treatment costs £350.\n- A course of four treatments costs £1,260",
  "title": "Beauti Fusion Mesotherapy",
  "slug": "Beauti-Fusion-Mesotherapy",
  "createdAt": "2020-08-25T05:19:14.932Z",
  "updatedAt": "2021-04-24T16:23:11.176Z",
  "__v": 0,
  "id": "5f449f5264acc003bf431202"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f449fd264acc003bf431204",
  "title": "IPL Skin Rejuvenation",
  "content": "#### What is IPL Skin Rejuvenation ?\n\nIntense pulsed light (IPL) skin rejuvenation is a safe and non-invasive method that can correct skin concerns such as rosacea, birthmarks, brown spots, thread and spider veins, pigmentation, sun damage and ageing skin. It is suitable for most skin types.\n\nIn IPL, a broad range of light wavelengths are pulsed onto the skin. The light penetrates just below the skin’s surface, where it disrupts melanin (skin pigment) and small blood vessels (which may be responsible for spider veins or rosacea). This triggers the skin’s repair mode and increases collagen production. The result is a visible reduction in imperfections and improvement in skin condition.\n\nThe number of treatments depends on your particular concern. For most skin imperfections, a course of 3-6 monthly treatments is recommended. Your therapist can advise you on the appropriate number of treatments.\n\nYou can choose to combine the following add-on treatments to enhance the effects of the IPL Skin Rejuvenation:\n\n- Dermaplaning for an extra-smooth finish\n  \n#### What should I expect after the treatment?\n\nThe skin may look red and feel sensitive, similar to mild sunburn, for a few hours after your treatment. Some people may experience a slight swelling that subsides. Skin sensitivity can continue for up to 48 hours as your skin recovers.\n\nBrown spots typically become darker for 24 hours following treatment then fade away over the next 1-2 weeks. Conditions such as rosacea and generalised ageing may need more time and treatments for visible changes to be seen.\n\n#### What is the after care?\n\nIf your skin feels hot after the treatment, applying a cooling gel can help. It is advisable to use a sun-protection factor (SPF) cream and stay out of the sun after IPL.\n\n#### How much does it cost?\n\n- One IPL skin rejuvenation treatment costs £110.\n- A course of three treatments costs £297.\n- A course of six treatments costs £561.\n\n**Please note: a patch test is required for all new customers booking this treatment, please book a Patch Test appintment first**",
  "slug": "IPL-Skin-Rejuvenation",
  "createdAt": "2020-08-25T05:21:22.263Z",
  "updatedAt": "2021-04-24T16:23:27.786Z",
  "__v": 0,
  "id": "5f449fd264acc003bf431204"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a2d864acc003bf431206",
  "title": "Micro-Needling with Dermapen",
  "content": "#### What is Micro-Needling with Dermapen?\n\nMicro-needling is an effective way to rejuvenate the skin and is suitable for all skin types and ages. This treatment can fade away acne scars, stretch marks and brown spots. It can also boost radiance, plump up the skin and reduce enlarged pores, sagging and wrinkles. \nThe Dermapen makes tiny punctures in the skin, which aid the penetration of active serums. It also stimulates skin renewal and the production of collagen and elastin, responsible for young-looking skin. \nDermapen is an FDA-approved device that has been shown to provide greater results and less discomfort than a roller.\n  \n#### What should I expect after the treatment?\n\nYou may see results after the first treatment; however, it usually takes 4-6 weeks to see significant changes in your skin. \n\nWith Dermapen, your skin may also feel warm and tight and you may experience temporary redness and swelling, a bit like sunburn. This usually subsides within 1-2 days and  depends on the needle depth used, your skin concern and skin type. Your therapist will discuss this with you during your initial consultation.\n\n#### What is the after care?\n\nAvoid very hot or cold water, swimming and tanning after your treatment. It is also advisable to use a sun-protection factor (SPF) cream after all treatments. Your therapist will give you more specific advice about what products to use on your skin after micro-needling.\n\n#### How much does it cost?\n\n- One treatment costs £200.\n- A course of four treatments costs £720.",
  "slug": "Micro-Needling-with-Dermapen",
  "createdAt": "2020-08-25T05:34:16.799Z",
  "updatedAt": "2021-04-24T16:23:40.744Z",
  "__v": 0,
  "id": "5f44a2d864acc003bf431206"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a37064acc003bf431208",
  "title": "Anti-Wrinkle Injections",
  "content": "#### What are Anti-Wrinkle Injections?\n\nAnti-wrinkle injections relax the muscles in the face to minimise lines and wrinkles. They are popular for crow’s feet and forehead lines. \n\nThey are suitable for people who want to minimise the appearance of lines and wrinkles. The effects usually last for 3-4 months; however, this varies from person to person and can depend on age, skin type, lifestyle and depth of wrinkles.\n\nAvoid anti-wrinkle injections if you are trying to conceive, are pregnant or breastfeeding; have a breathing condition, such as asthma, a skin condition or infection in the treatment area, a condition that affects your nerves or muscles, are allergic to any ingredient in the injection including botulinum toxin, have difficulty swallowing, bleeding issues, drooping eyelids, weakness in your forehead muscles, have had facial surgery, are planning to undergo surgery, are taking certain medications or supplements.\n\nThis is not an exhaustive list, please book a Consultation before treatment so we can assess your suitability for anti-wrinkle injections and discuss any questions you may have.\n\nAll Anti-Wrinkle Injection treatments at Beauti will be performed by our founder Cinzia Campigotto who is a fully insured and certified T.T.R Anti-Wrinkle Injections Specialist.\n  \n#### What should I expect after the treatment?\n\nMost people see a difference after 2 to 4 days; however, it usually takes around 2 weeks to see the full effect.\n\nYou might experience side effects including pain, inflammation, swelling, redness, bleeding and bruising. Cinzia will discuss possible side effects with you during your initial consultation.\n\n#### What is the after care?\n\nAvoid rubbing or massaging the treated area for the rest of the day.\n\n#### How much does it cost?\n\n- One area costs £175.\n- Two areas cost £250.\n- Three areas cost £325.",
  "slug": "Anti-Wrinkle-Injections",
  "createdAt": "2020-08-25T05:36:48.506Z",
  "updatedAt": "2020-08-25T05:38:20.874Z",
  "__v": 0,
  "id": "5f44a37064acc003bf431208"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a3c464acc003bf431209",
  "title": "Dermal Fillers",
  "content": "#### What are dermal fillers? \n\nDermal fillers can plump out lines and wrinkles, sculpt and lift the face, and enhance the look of the lips. When administered by a skilled aesthetician , they provide a subtle and natural-looking effect.\n\nDuring a dermal filler treatment, hyaluronic acid gel is injected under the skin. Hyaluronic acid is a natural substance produced by the body that keeps the skin looking plump and healthy. The effects usually last for 6 months, you will need to repeat the treatment if you want to maintain the effect.\n\nFillers are suitable for all skin types, please book a Consultation before treatment so we can assess your suitability for dermal fillers and discuss any questions you may have.\n\nAll Dermal Filler treatments at Beauti will be performed by our founder Cinzia Campigotto who is a fully insured and certified T.T.R Dermal Filler Specialist.\n  \n#### What should I expect after the treatment?\n\nResults can be seen straight after your treatment. Please bear in mind that you might have some slight swelling or bruising after your treatment. Once this has subsided, you will see the full effect, which lasts for around 6 months. Please note that results vary from person to person.\n\nYour therapist will discuss results and side effects with you at your initial consultation.\n\n#### What is the after care?\n\nAfter the treatment, your therapist will put a healing lotion on your skin and give you after-care instructions.\n\n#### How much does it cost?\n\n- A single lip filler treatment costs £190.\n- A single marionette line filler treatment costs £190.\n- A single Laugh Line filler treatment costs £250.",
  "slug": "Dermal-Fillers",
  "createdAt": "2020-08-25T05:38:12.387Z",
  "updatedAt": "2020-08-25T05:38:12.408Z",
  "__v": 0,
  "id": "5f44a3c464acc003bf431209"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a43a64acc003bf43120c",
  "title": "Plasma Face Lift",
  "content": "#### What is Plasma Face Lift?\n\nThe plasma lift is a long-lasting non-surgical treatment that can lift and rejuvenate the skin. It can help with sagging, age spots, acne scars, wrinkles, uneven skin tone, pigmentation, stretch marks and sun-damaged skin.\n\nDuring the treatment, a pen-like device releases an electric current. This creates tiny injuries in the skin that kickstart the wound-healing response. The result is tissue renewal, skin tightening and increased production of collagen and elastin, responsible for plump and youthful skin. \n\nThe number of treatments needed to see results varies from person to person. Usually 1-3 treatments are needed.\n\nPlease book a Consultation before treatment so we can assess your suitability for plasma lift and to discuss any questions you may have.\n  \n#### What should I expect after the treatment?\n\nYou will have small red dots all over the treatment area that scab over and fall off after about a week. As your skin recovers over the next two weeks, the full effects of the treatment will be seen. \n\nYou could see results after one treatment, but it might take up to three treatments to see a difference. Results can last for up to a year after treatment.\n\nDuring your initial consultation, your therapist will discuss all possible effects after treatment.\n\n#### What is the after care?\n\nYour therapist will advise you about after care for this treatment. \n\n#### How much does it cost?\n\nPrices range from £350 for a lower eye lift to £2,000 for the whole face. Visit the Booking page for more details.",
  "slug": "Plasma-Face-Lift",
  "createdAt": "2020-08-25T05:40:10.321Z",
  "updatedAt": "2021-03-23T11:53:59.609Z",
  "__v": 0,
  "id": "5f44a43a64acc003bf43120c"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a49c64acc003bf43120e",
  "title": "Dermaplaning",
  "content": "#### What is Dermaplaning?\n\nDermaplaning is a treatment that skims off the top layer of dead skin cells and fine hair from the face using a blade (although this might sound scary, it does not actually hurt at all). \n\nThe result is a smooth, radiant and more youthful complexion. Other benefits include improved appearance of acne scars, removal of trapped dirt and oil, and improved absorption of skincare products.  \n\nDermaplaning is suitable for all skin types and ages. It is an excellent treatment to prep the skin before undergoing any other advanced skin treatments. It is available to book as an add-on treatment as well. \n\nSome people opt for dermaplaning to look their best before a special event. For those who want to maintain the effect, treatments every 3-4 weeks are recommended.\n  \n#### What should I expect after the treatment?\n\nYou will probably see improvements straight after your treatment; however, it often takes several days to see full results. The effects disappear after about 3-4 weeks.\n\nThe fine hair on the face does not grow back thicker after dermaplaning.\n\n#### What is the after care?\n\nYour skin will be more receptive to serum after dermaplaning. You can talk to your therapist about suitable products.\n\nAvoid swimming in a chlorinated pool for 1-2 days afterwards. Keep away from excessive heat (strenuous workouts, steam rooms and saunas) and direct sun exposure for 3 days. Your therapist will discuss after-care recommendations with you.\n\nIt is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- One treatment costs £65.\n",
  "slug": "Dermaplaning",
  "createdAt": "2020-08-25T05:41:48.651Z",
  "updatedAt": "2020-08-25T05:41:48.674Z",
  "__v": 0,
  "id": "5f44a49c64acc003bf43120e"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a5e264acc003bf431210",
  "title": "Beauti Signature Relaxing Facial",
  "content": "#### What is Aqua 3 Hydrotherapy Facial?\n\nIf you are looking for a facial not only will leave you with a healthy-looking skin that is plump, hydrated and glowing at the same time to create a sense of relaxed wellbeing, this is the treat for you!\n\nThis luxurious facial includes a deep cleanse, enzymatic exfoliation and three different masques to visibly improve your skin’s condition. The highlight of this wonderful facial is an expert 30-minute facial massage designed to relax, detoxify and tone your facial muscles. \n\nAs with all treatments at Beauti, this facial is tailored to your skin’s specific needs. \n  \n#### What should I expect after the treatment?\n\nAfter this treatment, you will feel relaxed and your skin will look plumper, hydrated and glowing. The extended facial massage, a key part of this treatment, will tone your facial muscles, reduce puffiness and boost the skin’s circulation. \n\n#### What is the after care?\n\nIt is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n- This 1-hour treatment costs £110.",
  "slug": "Beauti-Signature-Relaxing-Facial",
  "createdAt": "2020-08-25T05:47:14.208Z",
  "updatedAt": "2021-03-23T11:54:18.207Z",
  "__v": 0,
  "id": "5f44a5e264acc003bf431210"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a66664acc003bf431212",
  "content": "#### What is Skin Imperfection Removal?\n\nAdvanced electrolysis is the preferred method of skin imperfection removal at Beauti, due to its precision and efficacy. Our trained and experienced therapists can remove a range of skin imperfections, including thread veins, moles, warts, milia, skin tags and age spots. During your initial consultation, your therapist will assess suitability for this treatment.\n\nIn most cases, one treatment is needed, but sometimes more may be required.\n\n#### What should I expect after the treatment?\n\nA scab will form over the removal site and heal up within a few weeks. Healing time depends on the type of imperfection and your skin type.\n\n#### What is the after care?\n\nYour therapist will advise you about the after care for this treatment.\n\n",
  "title": "Skin imperfection removal",
  "slug": "Skin-imperfection-removal",
  "createdAt": "2020-08-25T05:49:26.864Z",
  "updatedAt": "2021-05-04T11:17:27.790Z",
  "__v": 0,
  "id": "5f44a66664acc003bf431212"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a6ba64acc003bf431214",
  "content": "#### What is electrolysis?\n\nElectrolysis is a safe and proven method of permanent hair removal. Unlike other techniques, hairs are removed individually. It works by sending a targeted electrical current down the hair shaft, which kills the hair at its root.\n\nElectrolysis is effective on all hair colours, including white and blonde hairs. \n\nHair grows in a three-stage cycle. For electrolysis to permanently remove a hair, it must be in the anagen (growing) phase. For this reason, multiple treatments may be needed to catch the hair in the anagen phase.\n  \n#### What should I expect after the treatment?\n\nYour therapist will tell you what to expect at your initial consultation. After several sessions, many people experience permanent hair removal with electrolysis. As with all treatments, results vary from person to person. \n\nSide effects are uncommon. After a treatment, the area might feel hot and sore and look red or bumpy. This should subside within a few hours to a couple of days. You might also see tiny pin-sized scabs, which will heal over.\n\n#### What is the after care?\n\nKeep the area clean, avoid exfoliation, skin acids (eg, glycolic and salicylic acid acid) and excessive heat for 48 hours. It is advisable to stay out of the sun and use sun protection after all treatments.\n\n#### How much does it cost?\n\n- 10 minutes: £20\n- 15 minutes: £30\n- 30 minutes: £40\n- 60 minutes: £60",
  "title": "Electrolysis",
  "slug": "Electrolysis",
  "createdAt": "2020-08-25T05:50:50.408Z",
  "updatedAt": "2020-08-25T05:50:50.422Z",
  "__v": 0,
  "id": "5f44a6ba64acc003bf431214"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a70a64acc003bf431216",
  "title": "Fat and Cellulite Reduction",
  "content": "#### What is Fat and Cellulite Reduction?\n\nAt Beauti, we use the latest radio frequency technology to contour the body and help reduce fat and cellulite. \n\nRadio frequency delivers controlled heat deep into the skin and tissues. This stimulates collagen production and blood circulation, and triggers fat deposits to break down. The result is firmer and tighter skin and a reduction in cellulite. \n\nThis treatment is especially popular for the upper arms, waist, hips and thighs.\n  \n#### What should I expect after the treatment?\n\nMany people see an effect after their first treatment, although it can take several sessions to see a difference. Results vary between individuals.\n\nYou might experience some redness, mild swelling and heat for a few hours after your treatment. \n\n#### What is the after care?\n\nKeep hydrated after your fat and cellulite reduction treatment by drinking water. If your skin feels hot after your treatment, a cooling gel can help. It is advisable to use a sun-protection factor (SPF) cream after all treatments.\n\n#### How much does it cost?\n\n30-minute treatment: \n\n- One treatment costs £80.\n- A course of six treatments costs £408.\n- A course of eight treatments costs £544.\n\n60-minute treatment:\n\n- One treatment costs £120.\n- A course of six treatments costs £612.\n- A course of eight treatments costs £816.\n",
  "slug": "Fat-and-Cellulite-Reduction",
  "createdAt": "2020-08-25T05:52:10.406Z",
  "updatedAt": "2020-08-27T18:58:04.534Z",
  "__v": 0,
  "id": "5f44a70a64acc003bf431216"
  },
  {
  "images": [
  {
  "_id": "5f2e68b91fea7067ae778565",
  "name": "treatment-skinbeautyclinic",
  "alternativeText": "",
  "caption": "",
  "hash": "treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "size": 851.16,
  "width": 6013,
  "height": 2526,
  "url": "/uploads/treatment_skinbeautyclinic_704e97b81c.jpeg",
  "formats": {
  "thumbnail": {
  "hash": "thumbnail_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 245,
  "height": 103,
  "size": 2.84,
  "path": null,
  "url": "/uploads/thumbnail_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "large": {
  "hash": "large_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 1000,
  "height": 420,
  "size": 24.85,
  "path": null,
  "url": "/uploads/large_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "medium": {
  "hash": "medium_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 750,
  "height": 315,
  "size": 14.61,
  "path": null,
  "url": "/uploads/medium_treatment_skinbeautyclinic_704e97b81c.jpeg"
  },
  "small": {
  "hash": "small_treatment_skinbeautyclinic_704e97b81c",
  "ext": ".jpeg",
  "mime": "image/jpeg",
  "width": 500,
  "height": 210,
  "size": 7.55,
  "path": null,
  "url": "/uploads/small_treatment_skinbeautyclinic_704e97b81c.jpeg"
  }
  },
  "provider": "local",
  "related": [
  "5f0f610a08c9d76a3f0e41bb"
  ],
  "createdAt": "2020-08-08T08:56:25.030Z",
  "updatedAt": "2020-08-08T08:59:45.940Z",
  "__v": 0,
  "id": "5f2e68b91fea7067ae778565"
  }
  ],
  "_id": "5f44a7b264acc003bf431218",
  "title": "IPL Laser Hair Removal",
  "content": "#### What is IPL hair removal?\n\nThis treatment uses a device that emits intense pulsed light (IPL) to remove hair. The light travels through the skin’s layers and targets melanin (pigment) in the hair shaft and root. The melanin in the hair absorbs light, becomes very hot and is destroyed. \n\nIPL is only able to remove hairs that are actively growing. For this reason, 6-8 treatments, 4-6 weeks apart, are needed to catch all hairs in the active phase.\n  \n#### What should I expect after the treatment?\n\nAfter IPL, it is normal for the treated area to feel as if it is sunburned. Aloe vera gel and cold compresses can help soothe the skin if this is the case. In some cases, the treated area can become red and bumpy. This can last from two hours to a few days, depending on your skin type. \n\n#### What is the after care?\n\nOpt for loose clothing for comfort straight after treatment if possible. It is important to avoid all sun exposure, sunbeds and self-tanning products before and after IPL. Avoid hair removal (eg, tweezing, waxing and depilatory creams) as this can affect the success of the treatment. If necessary, hair can be shaved between sessions. It is normal for hair to shed after treatments. This can be encouraged using exfoliation.\n\nKeep away from heat, such as saunas, hot showers and baths for 2-3 days. Avoid products containing Retin-A (tretinoin), retinol, benzoyl peroxide, astringents, chemical peels, glycolic and salicylic acids, and any possible irritants for at least 2 days.\n\n#### How much does it cost?\n\nFor a small area, a single treatment costs £40 and £204 for a course of 6 treatments. \n\nFor a medium area, a single treatment costs £80 and £408 for a course of 6 treatments. \n\nFor a large area, a single treatment costs £120 and £612 for a course of 6 treatments. \n\n**Please note: a patch test is required for all new customers booking this treatment, please book a Patch Test appintment first**",
  "slug": "IPL-Laser-Hair-Removal",
  "createdAt": "2020-08-25T05:54:58.983Z",
  "updatedAt": "2021-03-23T11:55:32.718Z",
  "__v": 0,
  "id": "5f44a7b264acc003bf431218"
  }
  ];

function readXml() {
  fs.readFile('./sitemap.xml', (err, data) => {
    if (data) {
      const existingSitemapList = JSON.parse(convert.xml2json(data, options));
      let existingSitemapURLStringList = [];
      if (existingSitemapList.urlset && existingSitemapList.urlset.url && existingSitemapList.urlset.url.length) {
          existingSitemapURLStringList = existingSitemapList.urlset.url.map(ele => ele.loc._text);
      }
      for (const project of projects) {

        if (existingSitemapURLStringList.indexOf(`${url}/treatments/${project.slug}`) == -1) {
          existingSitemapList.urlset.url.push({
            loc: {
              _text: `${url}/treatments/${project.slug}`,
            },
            changefreq: {
              _text: 'monthly'
            },
            priority: {
              _text: 0.8
            },
            lastmod: {
              _text: moment(new Date()).format('YYYY-MM-DD')
            }
          });
        }
      }
      createSitemapFile(existingSitemapList);
    }
  });
}

/*
    Method to convert JSON format data into XML format
*/
const createSitemapFile = (list) => {
  const finalXML = convert.json2xml(list, options); // to convert json text to xml text
  saveNewSitemap(finalXML);
}

/*
  Method to Update sitemap.xml file content
*/
const saveNewSitemap = (xmltext) => {
  fs.writeFile('sitemap.xml', xmltext, (err) => {
      if (err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
}

readXml();
