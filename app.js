// Shared NeuroNode "won't connect" flow — same steps, used in two different menu locations (product page + AAC quick help).
const nnConnectionSteps=[
["./assets/nn-power-cycle.jpg","Turn it off and on again",["Put NeuroNode into Standby.","Give it a shake to wake it up.","Reconnect in the app."]],
["./assets/nn-standby.jpg","Preferred: reset through the app",["In the Controller App, go to Home → Advanced.","Tap the Scrub Brush icon, then confirm Yes.","Wait for NeuroNode to blink blue quickly, then enter Standby.","On your device, go to Bluetooth settings and forget/remove NeuroNode."]],
["./assets/nn-reset-repair.jpg","Or reset it manually",["Close the app.","Forget NeuroNode in Bluetooth settings.","Turn Bluetooth off.","Hold the pin until the light goes from fast white to fast blue, then let go.","Turn Bluetooth back on and reconnect."]],
["./assets/nn-indicator-quick.jpg","Check the light to confirm",["Green — switch signal detected (working).","Yellow — low battery, recharge soon.","Blue — searching for Bluetooth (returns to standby after 60s).","Red — error state, contact Support or reset again."]]
];

// ===== EMG Academy: courses & lessons =====
const academyCourses=[
{id:"c1",title:"EMG Fundamentals",lessons:[
  {id:"l1",title:"What is EMG?",duration:"5 min"},
  {id:"l2",title:"How muscles create signals",duration:"5 min"},
  {id:"l3",title:"Understanding amplitude",duration:"5 min"},
  {id:"l4",title:"Signal vs noise",duration:"5 min"}
]},
{id:"c2",title:"Electrode Placement",lessons:[
  {id:"l5",title:"Skin preparation",duration:"5 min"},
  {id:"l6",title:"Electrode orientation",duration:"5 min"},
  {id:"l7",title:"Finding the muscle belly",duration:"5 min"},
  {id:"l8",title:"Common placement mistakes",duration:"5 min"}
]},
{id:"c3",title:"Understanding NeuroStrip Data",lessons:[
  {id:"l9",title:"Reading the waveform",duration:"5 min"},
  {id:"l10",title:"RMS",duration:"5 min"},
  {id:"l11",title:"Activation timing",duration:"5 min"},
  {id:"l12",title:"Comparing channels",duration:"5 min"}
]},
{id:"c4",title:"Practical Applications",lessons:[
  {id:"l13",title:"Rehabilitation",duration:"5 min"},
  {id:"l14",title:"Performance",duration:"5 min"},
  {id:"l15",title:"Building a protocol",duration:"5 min"}
]}
];
// Extra per-lesson detail for the one fully-worked example lesson from your deck; others get a sensible default.
const lessonDetails={
l3:{learn:["What amplitude represents","What μV means","Why amplitude changes","Why you shouldn't compare raw values blindly"],concepts:[["Amplitude","The magnitude of the recorded EMG signal."],["RMS","A rolling average used to smooth the raw signal for easier reading."]],related:["ns-graph","ns-placement"]}
};
function lessonNav(id){
  const flat=academyCourses.flatMap(c=>c.lessons.map(l=>({...l,course:c.title})));
  const i=flat.findIndex(l=>l.id===id);
  return {lesson:flat[i],course:flat[i]?.course,next:flat[i+1]||null,index:i};
}

// ===== FAQ data =====
const faqData=[
{cat:"Connecting",q:"Why won't my NeuroNode connect?",a:"Turn it off and on again first — Standby, then Shake to Wake. If that doesn't work, try the full Bluetooth reset.",link:"nn-connect"},
{cat:"Connecting",q:"NeuroNode doesn't appear in Bluetooth settings",a:"It may still be connected even if it's not listed. Check Device Manager, expand Bluetooth, and uninstall NeuroNode there if you see it, then reconnect.",link:"nn-troubleshoot"},
{cat:"Connecting",q:"Why does NeuroNode keep disconnecting?",a:"Usually a battery or Bluetooth range issue. Check the charge level, keep the device within a few metres, and try the reset if it persists.",link:"nn-troubleshoot"},
{cat:"Signal",q:"Why am I getting a weak signal?",a:"Check skin prep, electrode placement, and that the band/bezel is snug and consistent with previous sessions.",link:"nn-electrodes"},
{cat:"Signal",q:"What does the green light mean?",a:"Green means an EMG/spatial signal has been detected and counted as a switch — it's working correctly.",link:"nn-charge"},
{cat:"Signal",q:"How tight should the band be?",a:"Snug enough that NeuroNode doesn't shift during use, without being uncomfortable.",link:"nn-electrodes"},
{cat:"EyeGaze",q:"Eye tracking is inaccurate",a:"Check the user is 45–60cm from the screen with the top of the screen level with their eyes.",link:"aac-eyegaze-position"},
{cat:"EyeGaze",q:"Camera cannot see my eyes",a:"Check cable connections first — Type-C into the camera, Type-A into the device hub — then retry calibration.",link:"aac-eyegaze-usb"},
{cat:"EyeGaze",q:"Calibration keeps failing",a:"Reposition the user, reduce glare/backlighting, and try a lower point-count calibration first.",link:"aac-eyegaze-position"},
{cat:"Grid 3",q:"Grid 3 won't open",a:"Give it a moment to load — it can take a few seconds, especially right after EyeGaze camera sync.",link:"aac-eyegaze-duo"},
{cat:"Grid 3",q:"NeuroNode works but Grid doesn't respond",a:"Confirm NeuroNode is added as a switch under Menu → Settings → Access → Switches → Connection.",link:"nn-grid3"},
{cat:"Charging",q:"NeuroNode won't charge",a:"Check the charging plate contacts are clean and NeuroNode is fully seated.",link:"nn-charge"},
{cat:"Charging",q:"What do the charging lights mean?",a:"See the full indicator reference — colours differ for charging, low battery, and error states.",link:"nn-charge"}
];

// ===== Resources data =====
const resourceData=[
{cat:"Quick Start Guides",product:"NeuroStrip",type:"PDF",title:"NeuroStrip Quick Start Guide",tag:"Getting Started",link:"ns-quickstart"},
{cat:"Quick Start Guides",product:"AAC",type:"Guide",title:"NeuroNode Trilogy Get Started",tag:"Getting Started",link:"aac-trilogy"},
{cat:"Manuals",product:"AAC",type:"PDF",title:"NeuroNode User Guide (full manual)",tag:"Reference",link:"https://controlbionics.com/wp-content/uploads/2026/05/27-3500-NeuroNode-User-Guide-Rev-M-compressed.pdf"},
{cat:"Manuals",product:"AAC",type:"Link",title:"NeuroNode product page",tag:"Reference",link:"https://controlbionics.com/neuronode/"},
{cat:"Training",product:"NeuroStrip",type:"Course",title:"EMG Academy — all lessons",tag:"Training",anchor:"emg-academy"},
{cat:"Clinical Resources",product:"NeuroStrip",type:"Guide",title:"sEMG electrode placement (SENIAM)",tag:"Clinical",link:"ns-placement"},
{cat:"EMG Resources",product:"NeuroStrip",type:"Guide",title:"Skin preparation guide",tag:"EMG",link:"ns-skinprep"},
{cat:"Useful Links",product:"AAC",type:"Link",title:"Control Bionics Tech Support",tag:"Support",link:"https://www.controlbionics.com/tech-support/"},
{cat:"Useful Links",product:"AAC",type:"Link",title:"IRISBOND manuals & guides",tag:"EyeGaze",link:"https://www.irisbond.com/en/support-service/user-manuals-and-guides/"},
{cat:"Useful Links",product:"AAC",type:"Link",title:"IRISBOND tips and tricks",tag:"EyeGaze",link:"https://www.irisbond.com/en/support-service/tips-and-tricks"},
{cat:"Useful Links",product:"AAC",type:"Link",title:"Eye gaze settings in Grid 3 — Smartbox Hub",tag:"Grid 3",link:"https://hub.thinksmartbox.com/knowledgebase/eye-gaze-settings-in-grid-3"},
{cat:"Software",product:"AAC",type:"Guide",title:"Keeping your software up to date",tag:"Software",link:"aac-software-updates"}
];

const guides={
// NeuroStrip
"ns-quickstart":{title:"NeuroStrip — Quick start & overview",source:"NeuroStrip User Guide",steps:[
 [
  "https://hounpydwftmlwncezujd.supabase.co/storage/v1/object/public/support-images/NeuroStrip/getting-started/quick%20view.png",
      "The quick view",
      ["A fast overview of NeuroStrip setup and use.","Good first stop if you're brand new."]],
    ["./assets/ns-guide-overview.png","Before you begin",["Charge NeuroStrip.","Prep the target site.","Connect it, then pick your workflow."]],
["./assets/ns-guide-dashboard.png","Find your way around",["The dashboard is home to Clients, Protocols and Connections."]]
]},
"ns-skinprep":{title:"NeuroStrip — Skin preparation",source:"Supplied Skin Preparation guide",steps:[
["./assets/ns-skin-preparation.jpg","Why it matters",["Good skin prep means a clearer signal, less electrical noise, and less irritation."]],
["./assets/ns-skin-preparation.jpg","Get the skin ready",["Find the target muscle.","Shave the area if needed.","Clean and lightly abrade the skin with an alcohol wipe.","Wipe with cotton gauze to help it dry faster.","Let it dry fully before placing NeuroStrip."]]
]},
"ns-placement":{title:"NeuroStrip — EMG placement",source:"Supplied sEMG placement guides (SENIAM-based)",steps:[
["./assets/ns-emg-placement-1.jpg","Where to place it",["Sit it over the muscle belly, not a tendon or joint.","Line it up with the direction of the muscle fibres.","Leave a small gap between electrodes and press firmly to connect."]],
["./assets/ns-emg-placement-2.jpg","Upper body & core",["Biceps Brachii — middle of the muscle.","Triceps — back of the upper arm.","Rectus Abdominis — horizontal line.","Obliques — slight angle."]],
["./assets/ns-emg-placement-2.jpg","Lower body",["Quadriceps — over the main muscle area.","Hamstrings — back of the thigh.","Gastrocnemius — avoid the Achilles tendon."]]
]},
"ns-accessories":{title:"NeuroStrip — Accessories case",source:"Supplied NeuroStrip accessories reference",steps:[
["./assets/ns-skin-preparation.jpg","What's in the case",["Alcohol wipes, antibacterial wipes, skin prep wipes.","Disposable gloves, bandages, measuring tape.","Flush pin, scissors, shaver."]]
]},
"ns-app-download":{title:"NeuroStrip — Download the app",source:"NeuroStrip App download guide (iOS & Windows)",steps:[
["./assets/ns-guide-overview.png","Get the app",["iOS — App Store, search 'NeuroStrip', tap Get, then Open.","Windows — Microsoft Store, search 'NeuroStrip'.","Wait for the download to finish."]],
["./assets/ns-guide-connections.png","Connect your first device",["Open the app and Shake to Wake NeuroStrip.","Insert NeuroStrip into the electrode patch.","Connect it in the app."]],
["./assets/ns-guide-select-protocol.png","Try the Wrist Extensor protocol",["Select it — two channels and wrist flexors are pre-selected automatically.","Precise placement matters most for this one."]]
]},
"ns-patch":{title:"NeuroStrip — Patch alignment",source:"Supplied Patch Alignment guide",steps:[
["./assets/ns-patch-alignment.jpg","Line up the patch",["Follow the six alignment steps.","Then apply the joined NeuroStrip and patch to the prepared site."]]
]},
"ns-connections":{title:"NeuroStrip — Connect NeuroStrip",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-connections.png","Get connected",["Wake NeuroStrip up.","Scan for nearby devices.","Connect it, then assign it to the right channel or muscle."]]
]},
"ns-patient":{title:"NeuroStrip — Patient / Client Manager",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-dashboard.png","Find your client",["Search, filter, or pick from the list.","Or create a brand new client."]],
["./assets/ns-guide-new-patient.png","Add a new client",["Fill in their basic details.","Add tags if it helps you organise later."]],
["./assets/ns-guide-patient-overview.png","See their overview",["Amplitude, distribution and iEMG all in one view."]],
["./assets/ns-guide-patient-sessions.png","Browse past sessions",["Every previous recording, ready to open."]],
["./assets/ns-guide-measurements.png","Check their progress",["Latest and best results.","How much they've improved over time."]]
]},
"ns-protocols":{title:"NeuroStrip — Create / edit protocols",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-protocols.png","Start a protocol",["Clone or edit an existing one.","Or start a brand new protocol."]],
["./assets/ns-guide-create-protocol-1.png","Set the basics",["Name it, tag it, pick your muscle channels."]],
["./assets/ns-guide-create-protocol-2.png","Set the timing",["Choose reps, intervals, and your target settings."]],
["./assets/ns-guide-edit-protocol.png","Check it, then save",["Preview the full sequence before saving it."]]
]},
"ns-session":{title:"NeuroStrip — Start a session",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-new-session.png","Connect your devices",["Assign each one to a channel and body placement."]],
["./assets/ns-guide-select-protocol.png","Pick your protocol",["Choose one (or more) and confirm the sequence."]],
["./assets/ns-guide-session-graph.png","Ready to record",["Double check placements and the live signal first."]]
]},
"ns-graph":{title:"NeuroStrip — Session graph & controls",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-session-graph.png","Reading the live graph",["Watch the signal and channel indicators as they record."]],
["./assets/ns-guide-graph-controls.png","The controls you have",["Widgets, audio, rep counting, notes, skip, pause and stop — all here."]]
]},
"ns-review":{title:"NeuroStrip — Review sessions & measurements",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-patient-sessions.png","Look back at sessions",["Open any past session.","Export it if you need to."]],
["./assets/ns-guide-measurements.png","See the bigger picture",["Latest results, best results, and the trend over time."]]
]},
"ns-troubleshooting":{title:"NeuroStrip — Troubleshooting",source:"NeuroStrip User Guide",steps:[
["./assets/ns-guide-troubleshooting.png","Work through these checks",["Is it awake and connected?","Is the skin prepped properly?","Is the patch sticking well?","Is NeuroStrip aligned on the patch?"]]
],warning:"Still stuck after these checks? Reach out to Support — we're happy to help."},
"ns-rehab":{title:"NeuroStrip — Rehabilitation pathway",source:"NeuroStrip support materials",jump:["ns-app-download","ns-skinprep","ns-placement","ns-connections","ns-patient","ns-protocols","ns-session","ns-review","ns-accessories"]},
"ns-sport":{title:"NeuroStrip — Sports & Performance pathway",source:"NeuroStrip support materials",jump:["ns-app-download","ns-placement","ns-connections","ns-protocols","ns-session","ns-graph","ns-review","ns-accessories"]},
"ns-dysphagia":{title:"NeuroStrip — Dysphagia",source:"Supplied Dysphagia 2-pager",steps:[],warning:"Coming soon — this section is still being put together. In the meantime, reach out to Support if you need swallowing-support guidance now."},

// AAC product landing guides — Trial Cards take priority
"aac-trilogy":{title:"AAC — NeuroNode Trilogy",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-components.jpg","What's included",["NeuroNode Trilogy device.","Device charger, wall charger, NeuroNode charging plate.","NeuroNode band, bezel and accessories bag."],"windows"],
["./assets/nn-trilogy-windows-infographic-1.svg","Set up EyeGaze",null,"windows"],
["./assets/nn-trilogy-windows-setup-2.jpg","Add NeuroNode + Grid 3",["Open the Controller App.","Shake to Wake, then connect NeuroNode.","Place NeuroNode on the user.","Open Grid 3."],"windows"],
["./assets/nn-components.jpg","What's included",["NeuroNode Trilogy device.","Device charger, wall charger, NeuroNode charging plate.","NeuroNode band, bezel and accessories bag."],"ios"],
["./assets/nn-trilogy-ios-setup-1.jpg","Set up EyeGaze (Oskol 2)",["Turn on the device.","Check the rear toggle switch.","Complete Hiru calibration.","Review iOS Accessibility settings."],"ios"],
["./assets/nn-trilogy-ios-setup-2.jpg","Add NeuroNode",["Connect NeuroNode in the Controller App.","Place it on the user.","Open Grid for iPad or your AAC app."],"ios"]
]},
"aac-duo":{title:"AAC — NeuroNode Duo",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-components.jpg","What's included",["NeuroNode device, charger and charging plate.","NeuroNode band, bezel and accessories bag."],"windows"],
["./assets/nn-duo-windows-quick.jpg","Quick setup",["Turn on the device.","Open the Controller App.","Shake to Wake and connect NeuroNode.","Place it, then open Grid 3 or your AAC software."],"windows"],
["./assets/nn-components.jpg","What's included",["NeuroNode device, charger and charging plate.","NeuroNode band, bezel and accessories bag."],"ios"],
["./assets/nn-duo-ios-quick.jpg","Quick setup",["Turn on the device.","Open the Controller App.","Shake to Wake and connect NeuroNode.","Place it, then open Grid for iPad or your AAC software."],"ios"]
]},
"aac-eyegaze-duo":{title:"AAC — EyeGaze Duo (Windows)",source:"TRIAL CARDS (2).pdf + supplied Control Bionics EyeGaze guides",steps:[
["./assets/aac-eyegaze-duo-trial.jpg","Start with the Trial Card guide",["Follow the simplified Windows EyeGaze Duo trial workflow."]],
["./assets/aac-eyegaze-usb.jpg","Connect the USB cables",["Plug USB-C into the EyeGaze camera.","Plug USB-A into the hub on the back of the device."]],
["./assets/aac-eyegaze-cameras.jpg","Connect the camera to Grid 3",["Go to Menu → Settings → Access → Camera.","Choose Alea or Irisbond, matching your camera.","Wait a few seconds — a green face means it's connected."]],
["./assets/aac-eyegaze-positioning.jpg","Position the user",["Sit them 45–60 cm from the screen.","Keep the top of the screen level with their eyes."]]
]},
"aac-oskol2":{title:"AAC — Oskol 2 (iOS)",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/aac-oskol2-trial.jpg","What's in the box",["iPad Air tablet + IRISBOND Hiru eye-tracker.","Mounting plate, hub, external battery.","Charger and connecting cables."]],
["./assets/aac-oskol2-trial.jpg","Turn it on",["Press and hold power until the screen lights up.","Check the toggle switch on the back is set to 'I' (on)."]],
["./assets/aac-eyegaze-usb.jpg","Connect the cables",["USB-C from the device into battery port 1 (charges the iPad).","Charger into port 2 (charges the external battery).","Avoid the USB-A ports marked 3 — they're not used."]],
["./assets/aac-eyegaze-cameras.jpg","Calibrate the Hiru",["Open the Hiru app (pre-installed).","Choose 9 or 16-point calibration — more points, higher precision.","Keep your eyes centred and in a good position."]],
["./assets/aac-eyegaze-positioning.jpg","Fine-tune dwell & smoothing",["In Settings → Accessibility → Assistive Touch, toggle Dwell Control on.","Adjust Dwell Time (Slow/Medium/Fast) and Smoothing to suit the user."]]
],warning:"Charge overnight with the Hiru off, and keep battery between 20–80% for best lifespan. Double-tap the battery area any time to check charge status."},
"aac-uno-touch":{title:"AAC — UNO Touch",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/aac-uno-touch-trial.jpg","Turn on UNO Touch",["Press and hold the power button until the screen lights up."],"windows"],
["./assets/aac-uno-touch-trial.jpg","Check Grid 3 opens",["Grid 3 will open automatically."],"windows"],
["./assets/aac-uno-touch-guide.jpg","Turn on the speaker",["Press Play/Pause on the Bluetooth speaker to turn it on."],"windows"],
["./assets/aac-uno-touch-trial.jpg","Turn on UNO Touch",["Press and hold the power button until the screen lights up."],"ios"],
["./assets/aac-uno-touch-trial.jpg","Open your app",["Find and open the app you need (e.g. Grid for iPad)."],"ios"],
["./assets/aac-uno-touch-guide.jpg","Turn on the speaker",["Press Play/Pause on the Bluetooth speaker to turn it on."],"ios"]
],warning:"Checklist: UNO Touch device · charger · Bluetooth speaker · charger cord & wall plug · shoulder strap · optional keyguard. To turn everything off, repeat the power-button step and hold Play/Pause on the speaker."},
"aac-neuronode":{title:"AAC — NeuroNode (only)",source:"TRIAL CARDS (2).pdf — priority for frontline; NeuroNode User Guide for deeper detail",jump:["aac-duo","nn-electrodes","nn-charge","nn-controller","nn-grid3","nn-troubleshoot"]},
"aac-mounts":{title:"AAC — Mounts",source:"TRIAL CARDS (2).pdf — Trial Mounting Systems",steps:[]},
"aac-eyegaze-usb":{title:"AAC — EyeGaze USB cable connections",source:"Supplied Control Bionics EyeGaze troubleshooting guide",steps:[
["./assets/aac-eyegaze-usb.jpg","Plug in the right cables",["USB-C goes into the EyeGaze camera.","USB-A goes into the hub on the back of the device."]]
]},
"aac-eyegaze-position":{title:"AAC — EyeGaze positioning",source:"Supplied Control Bionics EyeGaze troubleshooting guide",steps:[
["./assets/aac-eyegaze-positioning.jpg","Get the distance and height right",["Sit the user 45–60 cm from the screen.","Keep the top of the screen level with their eyes.","This gives the most accurate tracking."]]
]},
"aac-eye-cameras":{title:"AAC — EyeGaze camera reference",source:"Supplied Control Bionics EyeGaze Cameras guide",steps:[
["./assets/aac-eyegaze-cameras.jpg","Know your camera",["Alea — Windows only. See intelligaze.com for support.","Hiru — works with Windows and iOS. See irisbond.com for support."]]
]},

// Shared NeuroNode support inside AAC
"nn-connect":{title:"AAC — NeuroNode won't connect",source:"TRIAL CARDS + NeuroNode User Guide",steps:nnConnectionSteps,warning:"Still not connecting? Contact Control Bionics Support."},
"nn-grid3":{title:"AAC — Connect NeuroNode to Grid 3",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-grid3-connect.jpg","Add NeuroNode as a switch",["Go to Menu → Settings → Access → Switches.","Open Connection → Change Key.","Use NeuroNode to make a selection, then press OK.","Press OK once more to save."]],
["./assets/nn-hid-f9.jpg","Set the keycode (if needed)",["Open Controller App → Home → Advanced.","Go to Advanced Settings.","Set HID Keycode Sendout to F9."]]
]},
"nn-charge":{title:"AAC — NeuroNode charging",source:"TRIAL CARDS + NeuroNode User Guide",steps:[
["./assets/nn-features-charge.jpg","Charge it up",["Place NeuroNode on the charging plate.","Check the light to confirm it's charging."]],
["./assets/nn-charging-detail.jpg","Know your indicators",["Active Electrode Indicators — two small dents on top, used as a placement guide in EMG mode.","Signal Indicator — changes colour during use to show status."]],
["./assets/nn-indicator-simple.jpg","Not charging properly?",["Check the plate contacts are clean.","Reseat NeuroNode fully in the plate."]]
]},
"nn-electrodes":{title:"AAC — NeuroNode electrodes, bezel & placement",source:"TRIAL CARDS (2).pdf — priority source",steps:[
["./assets/nn-electrode-options.jpg","Pick your electrode",["Non-adhesive — used with bezel + strap on wrist, arms, thighs, ankle.","Adhesive — for spots hard to strap, like thumb, shoulder, abdomen.","Cloth — for facial muscles (eyebrows, cheeks); needs skin prep."]],
["./assets/nn-good-signal-1.jpg","Prep adhesive electrodes",["Clean with an alcohol wipe, then a skin prep wipe.","Place electrodes on the active muscle.","Click NeuroNode onto the electrode."]],
["./assets/nn-good-signal-2.jpg","Prep cloth electrodes",["Clean and prep the skin the same way.","Attach two white electrodes on the muscle, one black on bone.","Wire them to the lapel base, then click NeuroNode on."]],
["./assets/nn-band-bezel.jpg","Fit the band and bezel",["Snap the bezel onto NeuroNode.","Thread the band through the bezel openings and set the tightness.","Click the electrode onto NeuroNode, then into the bezel face."]],
["./assets/nn-spatial-placement.jpg","Keep placement consistent",["Use the same spot and orientation every time.","Inconsistent placement means inconsistent switching."]]
]},
"nn-controller":{title:"AAC — NeuroNode Controller App",source:"NeuroNode User Guide",steps:[
["./assets/nn-overview.jpg","What the app is for",["A companion app for adjusting parameters and monitoring EMG/spatial signal.","Helps you get the most reliable switching for the user's device."]],
["./assets/nn-controller-graph.jpg","Read the live graph",["Watch the signal line rise above threshold to register a switch.","You'll hear a switch sound each time."]],
["./assets/nn-graph-settings.jpg","Adjust threshold & sensitivity",["Use the + and − buttons in the graph menu.","Tap Back to return to the Graph Menu."]],
["./assets/nn-advanced-switching-1.jpg","Switching Mode",["Toggle Tap or Toggle, or use Spatial mode.","Set the Display Settings and Audio Signal to suit the user."]],
["./assets/nn-advanced-switching-2.jpg","Scaling Mode — Static",["Sets a fixed on/off threshold.","Good when the user's signal is steady session to session."]],
["./assets/nn-dynamic-scaling.jpg","Scaling Mode — Dynamic",["Adapts to the user's average activity in real time.","Good when signal strength varies day to day."]],
["./assets/nn-home-menu.jpg","Find your way around",["Home Menu gives you Graph, About, Advanced and Standby."]]
]},
"nn-troubleshoot":{title:"AAC — NeuroNode reset / Bluetooth scrub",source:"TRIAL CARDS (2).pdf — priority; NeuroNode User Guide",steps:nnConnectionSteps,warning:"Still not connecting? Contact Control Bionics Support."},
"aac-software-updates":{title:"AAC — Keeping your software up to date",source:"Supplied troubleshooting/software update reference",steps:[
["./assets/nn-advanced-menu.jpg","Windows updates",["Press 'Check for updates' in Windows Update."]],
["./assets/nn-advanced-settings.jpg","Grid 3 updates",["Click the orange reverse-arrow icon top-right to install the latest update.","Not visible? Open the Smartbox Update app manually instead."]],
["./assets/aac-eyegaze-cameras.jpg","Hiru Systray updates",["Find the blue circle icon in your hidden system tray icons.","Right-click it and choose 'Check for updates'."]]
]}
};

// Generate a guide entry for every EMG Academy lesson so it can open in the same modal system as everything else.
academyCourses.forEach(course=>{
  course.lessons.forEach((lesson,i)=>{
    const detail=lessonDetails[lesson.id]||{};
    const nav=lessonNav(lesson.id);
    guides["lesson-"+lesson.id]={
      title:lesson.title,
      source:"EMG Academy — "+course.title,
      lesson:true,
      duration:lesson.duration,
      courseTitle:course.title,
      learn:detail.learn||["The key idea behind '"+lesson.title+"'.","How it applies to real NeuroStrip sessions."],
      concepts:detail.concepts||[],
      related:detail.related||[],
      next:nav.next
    };
  });
});

const modal=document.getElementById("modal"),content=document.getElementById("modalContent");
let current=null,history=[],activeContext="neutral";

function cfg(ctx){
  return ctx==="aac"
   ? {name:"Nodi",img:"./assets/nodi-neuronode.png",label:"Ask Nodi",placeholder:"Ask Nodi an AAC question…"}
   : ctx==="neurostrip"
   ? {name:"Nero",img:"./assets/nero-transparent.png",label:"Ask Nero",placeholder:"Ask Nero a NeuroStrip question…"}
   : {name:"Guide",img:"./assets/nero-transparent.png",label:"Support Guide",placeholder:"Ask a support question…"};
}
function setContext(ctx){
  activeContext=ctx;
  document.body.classList.remove("context-neutral","context-neurostrip","context-aac");
  document.body.classList.add(`context-${ctx}`);
  const c=cfg(ctx);
  document.getElementById("mascotCompanionImg").src=c.img;
  document.getElementById("mascotCompanionImg").classList.remove("expression");
  document.getElementById("floatingMascotBtn").textContent=`✦ ${c.label}`;
  document.getElementById("askMascotTop").textContent=`✦ ${c.label}`;
  document.getElementById("assistantChatCharacter").src=c.img;
  document.getElementById("assistantIntroName").textContent=ctx==="neutral"?"Choose a section first":`Hi, I'm ${c.name} 👋`;
  document.getElementById("assistantIntroText").textContent=ctx==="aac"?"I guide AAC support, including NeuroNode, EyeGaze and communication devices.":ctx==="neurostrip"?"I guide NeuroStrip setup, application workflows and troubleshooting.":"Select NeuroStrip or AAC and the right support mascot will take over.";
  document.getElementById("assistantTitle").textContent=ctx==="neutral"?"Ask your support guide":c.label;
  document.getElementById("assistantInput").placeholder=c.placeholder;
}
document.querySelectorAll("[data-context]").forEach(a=>a.addEventListener("click",()=>setContext(a.dataset.context)));

function contextForKey(key){return key.startsWith("ns-")?"neurostrip":"aac"}

function imageClass(src){
  if(/infographic/i.test(src))return "infographic";
  return /skin-preparation|patch-alignment|emg-placement|dysphagia|eyegaze|trial|setup|charge|band|indicator|overview|guide/i.test(src) ? "portrait" : "landscape";
}
function renderGuide(key){
  const g=guides[key];
  if(g.lesson){
    let html=`<div class="guide-title"><span class="eyebrow">EMG ACADEMY — ${g.courseTitle.toUpperCase()}</span><h2>${g.title}</h2><p>${g.duration}</p></div>`;
    html+=`<div class="lesson-video"><div class="lesson-video-placeholder">▶<span>Video coming soon</span></div></div>`;
    html+=`<div class="lesson-body">`;
    if(g.learn.length)html+=`<div class="lesson-block"><h3>What you'll learn</h3><ul>${g.learn.map(l=>`<li>${l}</li>`).join("")}</ul></div>`;
    if(g.concepts.length)html+=`<div class="lesson-block"><h3>Key concepts</h3>${g.concepts.map(([t,d])=>`<p><strong>${t}</strong> — ${d}</p>`).join("")}</div>`;
    if(g.related.length)html+=`<div class="lesson-block"><h3>Related guides</h3><div class="choice-grid">${g.related.map(k=>`<button class="choice" data-jump="${k}">${(guides[k]&&guides[k].title)||k}</button>`).join("")}</div></div>`;
    html+=`</div>`;
    if(g.next)html+=`<button class="lesson-next" data-jump="lesson-${g.next.id}">Next lesson → ${g.next.title}</button>`;
    html+=`<div class="source-note">Source basis: ${g.source}</div>`;
    return html;
  }
  let html=`<div class="guide-title"><span class="eyebrow">${contextForKey(key)==="aac"?"AAC SUPPORT GUIDE":"NEUROSTRIP SUPPORT GUIDE"}</span><h2>${g.title}</h2><p>Just scroll down and follow along — tap any picture to see it bigger.</p></div>`;
  if(g.jump){
    const names={"aac-duo":"🚀 Get Started (same as NeuroNode Duo)","ns-app-download":"Download the app","ns-accessories":"Accessories case","ns-skinprep":"Skin preparation","ns-placement":"EMG placement","ns-connections":"Connect NeuroStrip","ns-patient":"Client Manager","ns-protocols":"Protocols","ns-session":"Start a session","ns-graph":"Session graph","ns-review":"Review progress","nn-connect":"Won't connect","nn-electrodes":"Electrodes & placement","nn-charge":"Charging","nn-controller":"Controller App","nn-grid3":"Grid 3","nn-troubleshoot":"Reset / Bluetooth scrub"};
    html+=`<div class="choice-grid">${g.jump.map(k=>`<button class="choice" data-jump="${k}">${names[k]||k}</button>`).join("")}</div>`;
  }
  if(g.steps && g.steps.length){
    const hasPlatforms=g.steps.some(s=>s[3]);
    if(hasPlatforms){
      const order=["windows","ios"],labels={windows:"🖥️ Windows",ios:"📱 iOS"};
      const present=order.filter(p=>g.steps.some(s=>s[3]===p));
      html+=`<div class="platform-toggle" role="tablist">${present.map((p,i)=>`<button class="platform-btn${i===0?" active":""}" data-platform="${p}">${labels[p]}</button>`).join("")}</div>`;
    }
    const counts={};
    html+=`<div class="vertical-guide">`+g.steps.map((s)=>{
      const platform=s[3]||null;
      const totalForPlatform=platform?g.steps.filter(x=>x[3]===platform).length:g.steps.length;
      counts[platform]=(counts[platform]||0)+1;
      const idx=counts[platform];
      const media=`<div class="guide-image-wrap"><img class="guide-image ${imageClass(s[0])}" src="${s[0]}" alt="${s[1]}"></div><div class="image-actions">Click image to enlarge <a href="${s[0]}" target="_blank" rel="noopener">Open image in new tab ↗</a></div>`;
      if(s[2]===null){
        // Full infographic step: the image is fully self-explanatory (its own headings/icons), so it spans the whole card.
        return `<section class="guide-step infographic-step"${platform?` data-platform="${platform}"`:""}>${media}</section>`;
      }
      if(Array.isArray(s[2])){
        // Short-form step: big "Step N" heading + brief recap on the left, image dominates on the right.
        return `<section class="guide-step integrated"${platform?` data-platform="${platform}"`:""}>
          <div class="guide-step-lead">
            <span class="step-kicker">STEP ${idx} OF ${totalForPlatform}</span>
            <h3>${s[1]}</h3>
            <ul class="step-recap">${s[2].map(a=>`<li>${a}</li>`).join("")}</ul>
          </div>
          <div class="guide-step-visual">${media}</div>
        </section>`;
      }
      return `<section class="guide-step"><span class="step-kicker">STEP / VISUAL ${idx} OF ${totalForPlatform}</span><h3>${s[1]}</h3><p>${s[2]}</p>${media}</section>`;
    }).join("")+`</div>`;
  }
  if(key==="aac-mounts"){
    const mountAssets=["./assets/aac-mounts-1.jpg","./assets/aac-mounts-2.jpg"].filter(src=>assetExists(src));
    html+=`<div class="vertical-guide"><section class="guide-step integrated"><div class="guide-step-lead"><span class="step-kicker">TRIAL MOUNTING SYSTEMS</span><h3>Table Stand &amp; Floor Stand</h3><ul class="step-recap"><li>Pick Table Stand or Floor Stand for the trial.</li><li>Follow the supplied mounting documentation to set it up.</li><li>Contact Support for configuration-specific help.</li></ul></div><div class="guide-step-visual"><div class="guide-image-wrap"><img class="guide-image portrait" src="${mountAssets[0]||''}" alt="Trial mounting system"></div><div class="image-actions">Click image to enlarge <a href="${mountAssets[0]||''}" target="_blank">Open image in new tab ↗</a></div></div></section>${mountAssets.slice(1).map((src,i)=>`<section class="guide-step integrated"><div class="guide-step-lead"><span class="step-kicker">TRIAL MOUNTING SYSTEMS</span><h3>Additional mounting view</h3><ul class="step-recap"><li>Check this angle against your chair or desk setup.</li></ul></div><div class="guide-step-visual"><div class="guide-image-wrap"><img class="guide-image portrait" src="${src}" alt="Trial mounting system ${i+2}"></div><div class="image-actions">Click image to enlarge <a href="${src}" target="_blank">Open image in new tab ↗</a></div></div></section>`).join("")}</div>`;
  }
  if(g.warning)html+=`<div class="callout warning">${g.warning}</div>`;
  html+=`<div class="source-note">Source basis: ${g.source}</div>`;
  return html;
}
function assetExists(src){const test=new Image();test.src=src;return true}

function applyPlatformFilter(scope,platform){
  scope.querySelectorAll(".guide-step[data-platform]").forEach(el=>{el.style.display=el.dataset.platform===platform?"":"none"});
}
function openGuide(key,push=true){
  if(push&&current&&current!==key)history.push(current);
  current=key;setContext(contextForKey(key));
  content.innerHTML=renderGuide(key);
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
  content.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>openGuide(b.dataset.jump,true));
  const platformBtns=content.querySelectorAll(".platform-btn");
  if(platformBtns.length){
    applyPlatformFilter(content,platformBtns[0].dataset.platform);
    platformBtns.forEach(b=>b.onclick=()=>{
      platformBtns.forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      applyPlatformFilter(content,b.dataset.platform);
    });
  }
  bindZoom(content);
  document.querySelector(".dialog").scrollTop=0;
}
function closeGuide(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";current=null;history=[]}
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openGuide(b.dataset.open));
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeGuide);
document.getElementById("backBtn").onclick=()=>{if(history.length){const p=history.pop();current=null;openGuide(p,false)}else closeGuide()};

/* Fullscreen images */
const lightbox=document.getElementById("imageLightbox"),lightboxImg=document.getElementById("imageLightboxImg"),lightboxNewTab=document.getElementById("imageLightboxNewTab");
function bindZoom(scope=document){scope.querySelectorAll(".guide-image").forEach(img=>{img.onclick=()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightboxNewTab.href=img.src;lightbox.classList.add("open")}})}
document.querySelectorAll("[data-lightbox-close]").forEach(el=>el.onclick=()=>lightbox.classList.remove("open"));

/* Search + simple mascot router */
const routes=[
["eyegaze cable usb type c type a","aac-eyegaze-usb"],["eyegaze position positioning distance 45 60 tracking accuracy","aac-eyegaze-position"],["eyegaze duo","aac-eyegaze-duo"],["oskol hiru ipad ios","aac-oskol2"],["uno touch","aac-uno-touch"],["trilogy","aac-trilogy"],["duo neuronode","aac-duo"],["mount floor stand table stand","aac-mounts"],["neuronode connect bluetooth shake wake","nn-connect"],["neuronode grid 3 f9 switch","nn-grid3"],["neuronode charge charging","nn-charge"],["neuronode electrode placement bezel band","nn-electrodes"],["neuronode reset scrub red error","nn-troubleshoot"],["neurostrip skin preparation","ns-skinprep"],["neurostrip placement emg","ns-placement"],["neurostrip connect","ns-connections"],["neurostrip protocol","ns-protocols"],["neurostrip session graph","ns-graph"],["neurostrip dysphagia swallow","ns-dysphagia"]
];
function findRoute(q){q=q.toLowerCase();let best=null,score=0;for(const [terms,key] of routes){let s=0;for(const t of terms.split(" ")){if(q.includes(t))s+=t.length}if(s>score){score=s;best=key}}return score?best:null}
function doSearch(){const q=document.getElementById("searchInput").value.trim(),k=findRoute(q);if(k)openGuide(k);else goAssistant(q)}
document.getElementById("searchBtn").onclick=doSearch;document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});

const neroStates=["happy","curious","focused","proud"];let ni=0,busy=false;
setInterval(()=>{if(activeContext==="neurostrip"&&!busy){const img=document.getElementById("mascotCompanionImg"),chat=document.getElementById("assistantChatCharacter"),src=`./assets/nero-${neroStates[ni++%neroStates.length]}.jpg`;[img,chat].forEach(x=>{x.src=src;x.classList.add("expression")})}},5000);

function ask(text){
  text=text.trim();if(!text)return;
  const log=document.getElementById("assistantChatLog"),c=cfg(activeContext);
  const u=document.createElement("div");u.className="assistant-msg user";u.textContent=text;log.appendChild(u);
  const k=findRoute(text);busy=true;
  if(activeContext==="neurostrip"){document.getElementById("mascotCompanionImg").src="./assets/nero-thinking.jpg";document.getElementById("assistantChatCharacter").src="./assets/nero-thinking.jpg"}
  setTimeout(()=>{const a=document.createElement("div");a.className="assistant-msg";if(k){const target=contextForKey(k),name=cfg(target).name;a.innerHTML=`<strong>${activeContext==="neutral"?"Guide":c.name}:</strong> I found the matching ${target==="aac"?"AAC":"NeuroStrip"} guide. <button class="choice" data-open-result="${k}">Open guide →</button>`;if(target!==activeContext)setContext(target)}else a.innerHTML=`<strong>${activeContext==="neutral"?"Guide":c.name}:</strong> I couldn't confidently match that to one of the current support guides. Try including the product and issue.`;log.appendChild(a);log.scrollTop=log.scrollHeight;a.querySelectorAll("[data-open-result]").forEach(b=>b.onclick=()=>openGuide(b.dataset.openResult));busy=false},450);
}
function goAssistant(prefill=""){document.getElementById("ask-guide").scrollIntoView({behavior:"smooth"});setTimeout(()=>{const i=document.getElementById("assistantInput");i.focus();if(prefill)i.value=prefill},350)}
document.getElementById("assistantSend").onclick=()=>{const i=document.getElementById("assistantInput");ask(i.value);i.value=""};document.getElementById("assistantInput").addEventListener("keydown",e=>{if(e.key==="Enter"){ask(e.target.value);e.target.value=""}});document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>ask(b.dataset.q));document.getElementById("floatingMascotBtn").onclick=()=>goAssistant();document.getElementById("askMascotTop").onclick=()=>goAssistant();

/* ===== EMG Academy hub ===== */
function renderAcademy(){
  const el=document.getElementById("academyCourses");
  el.innerHTML=academyCourses.map((c,ci)=>`
    <div class="academy-course">
      <h4><span class="course-num">COURSE ${String(ci+1).padStart(2,"0")}</span>${c.title}</h4>
      <div class="academy-lessons">${c.lessons.map(l=>`<button class="academy-lesson" data-open="lesson-${l.id}"><span class="lesson-dot"></span><span class="lesson-name">${l.title}</span><span class="lesson-dur">${l.duration}</span></button>`).join("")}</div>
    </div>`).join("");
  el.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openGuide(b.dataset.open));
}
renderAcademy();
document.getElementById("academyStartBtn").onclick=()=>openGuide("lesson-l1");

/* ===== Academy Admin (front-end prototype only — no backend yet) ===== */
const academyDrafts=[];
function renderAdminPanel(){
  let panel=document.getElementById("academyAdminPanel");
  if(panel){panel.classList.toggle("open");return}
  panel=document.createElement("div");
  panel.id="academyAdminPanel";
  panel.className="admin-panel open";
  panel.innerHTML=`
    <div class="admin-panel-inner">
      <h3>EMG Academy Admin</h3>
      <p class="admin-note">Prototype only — this doesn't save anywhere yet. Wiring this to Supabase (per the site plan) makes it persist for real, with proper admin login.</p>
      <div class="admin-form">
        <label>Title<input id="adminTitle" placeholder="Understanding EMG Amplitude"></label>
        <label>Course<select id="adminCourse">${academyCourses.map(c=>`<option value="${c.id}">${c.title}</option>`).join("")}</select></label>
        <label>Video<input id="adminVideo" placeholder="Upload / Video URL"></label>
        <label>Thumbnail<input id="adminThumb" placeholder="Upload"></label>
        <label>Description<input id="adminDesc" placeholder="Short description"></label>
        <label>Duration<input id="adminDuration" placeholder="05:12"></label>
        <label>Order<input id="adminOrder" type="number" placeholder="3"></label>
        <label>Status
          <select id="adminStatus"><option value="draft">Draft</option><option value="published">Published</option></select>
        </label>
        <button class="btn primary" id="adminSaveBtn" type="button">Save</button>
      </div>
      <div id="adminDraftList" class="admin-draft-list"></div>
    </div>`;
  document.getElementById("emg-academy").appendChild(panel);
  document.getElementById("adminSaveBtn").onclick=()=>{
    const val=id=>document.getElementById(id).value;
    if(!val("adminTitle")){alert("Add a title first.");return}
    academyDrafts.push({title:val("adminTitle"),course:val("adminCourse"),video:val("adminVideo"),duration:val("adminDuration"),order:val("adminOrder"),status:val("adminStatus")});
    renderDrafts();
    ["adminTitle","adminVideo","adminThumb","adminDesc","adminDuration","adminOrder"].forEach(id=>document.getElementById(id).value="");
  };
  renderDrafts();
}
function renderDrafts(){
  const list=document.getElementById("adminDraftList");
  if(!list)return;
  list.innerHTML=academyDrafts.length? `<h4>Added this session (not persisted):</h4>`+academyDrafts.map(d=>`<div class="admin-draft"><strong>${d.title}</strong> — ${d.course} — ${d.status}</div>`).join("") : "";
}
document.getElementById("academyAdminLink").onclick=(e)=>{e.preventDefault();renderAdminPanel()};

/* ===== FAQ ===== */
const faqCats=["All",...new Set(faqData.map(f=>f.cat))];
let faqActiveCat="All",faqActiveQuery="";
function renderFaqChips(){
  document.getElementById("faqChips").innerHTML=faqCats.map(c=>`<button class="faq-chip${c===faqActiveCat?" active":""}" data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll(".faq-chip").forEach(b=>b.onclick=()=>{faqActiveCat=b.dataset.cat;renderFaqChips();renderFaqList()});
}
function renderFaqList(){
  const q=faqActiveQuery.toLowerCase();
  const filtered=faqData.filter(f=>(faqActiveCat==="All"||f.cat===faqActiveCat)&&(!q||f.q.toLowerCase().includes(q)||f.a.toLowerCase().includes(q)));
  const groups={};
  filtered.forEach(f=>{(groups[f.cat]=groups[f.cat]||[]).push(f)});
  const list=document.getElementById("faqList");
  if(!filtered.length){list.innerHTML=`<p class="faq-empty">No matching questions — try a different search or category.</p>`;return}
  list.innerHTML=Object.entries(groups).map(([cat,items])=>`
    <div class="faq-group"><h4>${cat}</h4>${items.map((f,i)=>`
      <details class="faq-item"><summary>${f.q}</summary><p>${f.a} ${f.link?`<button class="faq-link" data-open="${f.link}">Open guide →</button>`:""}</p></details>`).join("")}</div>`).join("");
  list.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openGuide(b.dataset.open));
}
document.getElementById("faqSearch").addEventListener("input",e=>{faqActiveQuery=e.target.value;renderFaqList()});
document.getElementById("faqSearchBtn").onclick=()=>renderFaqList();
renderFaqChips();renderFaqList();

/* ===== Resources ===== */
const resourceCats=["Manuals","Quick Start Guides","Training","Clinical Resources","EMG Resources","Useful Links","Software"];
const resourceIcons={"Manuals":"📘","Quick Start Guides":"⚡","Training":"🎥","Clinical Resources":"📄","EMG Resources":"🧠","Useful Links":"🔗","Software":"💻"};
let resActiveCat="",resActiveProduct="",resActiveQuery="";
function renderResourceChips(){
  document.getElementById("resourceChips").innerHTML=resourceCats.map(c=>`<button class="resource-chip${c===resActiveCat?" active":""}" data-cat="${c}">${resourceIcons[c]} ${c}</button>`).join("");
  document.querySelectorAll(".resource-chip").forEach(b=>b.onclick=()=>{resActiveCat=resActiveCat===b.dataset.cat?"":b.dataset.cat;renderResourceChips();renderResourceList()});
  const sel=document.getElementById("resourceProductFilter");
  if(sel.options.length<=1)[...new Set(resourceData.map(r=>r.product))].forEach(p=>sel.insertAdjacentHTML("beforeend",`<option value="${p}">${p}</option>`));
}
function renderResourceList(){
  const q=resActiveQuery.toLowerCase();
  const filtered=resourceData.filter(r=>(!resActiveCat||r.cat===resActiveCat)&&(!resActiveProduct||r.product===resActiveProduct)&&(!q||r.title.toLowerCase().includes(q)));
  const list=document.getElementById("resourceList");
  if(!filtered.length){list.innerHTML=`<p class="faq-empty">Nothing matches yet — try a different filter.</p>`;return}
  list.innerHTML=filtered.map(r=>`
    <div class="resource-card">
      <span class="resource-type">${r.type}</span>
      <strong>${r.title}</strong>
      <small>${r.product} • ${r.tag}</small>
      <div class="resource-actions">${r.anchor?`<a href="#${r.anchor}">View</a>`:r.link&&r.link.startsWith("http")?`<a href="${r.link}" target="_blank" rel="noopener">View ↗</a>`:`<button data-open="${r.link}">View</button>`}</div>
    </div>`).join("");
  list.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openGuide(b.dataset.open));
}
document.getElementById("resourceSearch").addEventListener("input",e=>{resActiveQuery=e.target.value;renderResourceList()});
document.getElementById("resourceProductFilter").addEventListener("change",e=>{resActiveProduct=e.target.value;renderResourceList()});
renderResourceChips();renderResourceList();

const io=new IntersectionObserver(entries=>{const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(v)setContext(v.target.id==="aac"?"aac":"neurostrip")},{threshold:[.35,.55]});["neurostrip","aac"].forEach(id=>io.observe(document.getElementById(id)));
setContext("neutral");
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(lightbox.classList.contains("open"))lightbox.classList.remove("open");else if(modal.classList.contains("open"))closeGuide()}});
