const contentDiv = document.getElementById("content");
const navLinks = document.querySelectorAll(".nav-link");

// Data for pages as HTML strings
const pages = {
  home: `
    <h1>Welcome to the Future of Hydropower</h1>
    <h3>Feasibility Study on the Implementation of Pico-Scale Residential Sector Hydropower</h3>
    <p>Canada's vast hydroelectric resources are a cornerstone of its renewable energy landscape. From 2016 to 2022, hydroelectric generating stations produced an average of 59.9% of Canada's total annual electricity (Government of Canada, 2024). However, land protection laws and limitations of the transmission grid to remote areas pose challenges to harnessing this potential fully. Innovative approaches and the rejuvenation of outdated power generation systems can enable Canadian hydropower to achieve higher outputs without major modifications to existing power infrastructure.<br></br>One significant area for innovation is small-scale hydro, particularly residential focused solutions. Small hydroelectric power, defined as installations with capacities up to 25 MW, currently accounts for approximately 4.2% of Canada's total hydroelectric capacity, with an installed capacity of 3400 MW (Canada, 2009). Natural Resources Canada, 2023, estimates the potential for small hydroelectric generation at 15000 MW, indicating substantial room for additional development.<br></br>However, this estimate does not encompass the untapped potential of wastewater energy; a resource produced by every household. Integrating pico-scale turbines- small enough to fit in a 10 cm pipe, into home plumbing systems presents an unexplored avenue for energy recovery. Unlike solar and wind energy, which require external infrastructure and are subject to environmental variability, wastewater flow within buildings offers a consistent gravity fed source of potential energy. By installing compact turbines at the base of sanitary stacks, it is possible to harness the gravitational potential energy of wastewater during routine domestic activities.
</p>
    <img src="./images/hydro-turbine.png" alt="Hydropower turbine" />
  `,
  theory: `
    <h2>Theory</h2>
    <h3>Single Story Housing</h3>
    <p>In North America, all water using appliances, sinks, and toilets connect to a PVC stack pipe, which runs the entire vertical height of the building. For residential buildings, a stack diameter of 100 mm (4 in) is typically used, however, 150 mm (6 in) diameters are also used for apartment complexes and industrial buildings (National Plumbing Code of Canada, 2020). The height of each floor depends on the type of residential building- an apartment complex or a suburban house. For ease of calculations, 3 meters is chosen. To maintain proper drainage and prevent negative pressure, the stack is vented to atmospheric pressure at the top. This helps prevent foul odors from entering the building by allowing gases to vent out. The bottom of the vertical drain stack connects to the main horizontal drain pipe- also called the "building drain,” that runs under the house, eventually connecting to the local sewer line. This main drain pipe carries all the wastewater from the house away (Plumbing terms, n.d., and National Plumbing Code of Canada, 2020)
</p>
<img src="./images/poop-pipe.png" alt="Research papers" />
    <h3>Multistory Highrises</h3>
    <p>For highrise buildings, thousands of potential sinks may be used at once- especially during peak water usage hours, and therefore, the sanitary drainage must be built to accommodate the potential discharge. Typically, multiple stacks are used to serve specific areas or levels of a highrise building, joining into the building drain at the base of the building (National Plumbing Code of Canada, 2020). With multiple occupants using the same stack, the daily potential energy of the wastewater increases significantly compared to single story homes. This represents a larger potential for power production from installed pico-scale hydroelectric turbines.</p>
    <img src="./images/multi.png" alt="Research papers" />
<p>A key difference between the plumbing systems of single family homes and highrise buildings is the separation of toilet wastewater from cleaner wastewater sources like sinks and showers. This practice is known as greywater separation; black water coming from toilets. This pre-water filtration supports more efficient downstream water treatment. For hydropower applications, one major advantage is the reduced debris content in greywater, which lowers maintenance demands on small-scale turbine systems.</p>

<h3>Stack Fluid Flow Theory</h3>
<p>Wastewater flow typically assumes an annular pattern forming a thin film along the inner pipe wall with an air core at the center. As wastewater descends, it accelerates until reaching terminal velocity. At this point, gravitational and viscous forces balance, producing a steady flow regime.</p>
<img src="./images/wata-pipe.png" alt="Research papers" />
<p>From Wise, terminal velocity reached in a 100 mm stack is approximately 5 m/s with a maximum flow rate of 10 L/s. The terminal velocity is typically achieved in the stack with a drop of 4 meters; following the equation Z=0.159Vt2 , derived from the Colebrook-White equation for friction factor (for full derivation, see pp. 123-125). At such a distance the thickness of the hollow water column is 1/16th of the stack diameter. Meaning, for a 100 mm stack, the terminal thickness is approximately 6 mm. </p>
<img src="./images/graph-lol.png" alt="Research papers" />
<h3>Pico-Hydropower Turbine Design</h3>
<p>For direct installation within sanitary stacks, turbine design is critical to ensure reliable performance under fluctuating flow conditions and exposure to black water. Pico-scale turbines can operate with hydraulic heads as low as 0.3 meters, as long as flow velocity is adequate to drive the system efficiently (Adhikari et al., 2014). From The British Hydropower Association, Pelton and Kaplan turbines maintain high efficiency even when operating well below their designed flow rating. In contrast, the efficiency of Francis, crossflow, and propeller turbines decreases significantly when running at less than half of their rated flow, leading to their typical use in run-of-river plants with relatively steady flow conditions (A Guide to UK mini-hydro development, 2012). <br> From “A Feasibility Study of Power Generation from Sewage Using a Hollowed Pico-Hydraulic Turbine” (Uchiyama et al., 2017), turbine performance was validated through CFD simulations and experimental results, demonstrating that a 15 mm microturbine achieved 6.4 W at 87.13% efficiency with heads of 0.6 m. Conclusions from the study indicate that hollowed Kaplan turbines can maintain efficiencies above 60% even when exposed to simulated black water. </p>
<h3>Efficiency of the System and Power Generation</h3>
<p>Pico-scale hydro systems are highly efficient, often converting 60%-90% of water energy into electricity, much higher than solar panels, 15%-20% typically (Kalbiyev, 2024). The efficiency of the system can be found by multiplying the efficiencies of each energy transmitting component.
<br>
<br>
𝜂all=𝜂Turbine 𝜂Generator 𝜂Transformer
Eq. 1
<br>
<br>
From the World Bank (Kiyoko, 2015), the efficiencies of generators and transformers are approximately 98% with minimal losses derived from heat and line loss. Based on this, and estimating the efficiency of the turbine to be 85%, yields an overall efficiency of  82%- well within the range of efficient turbines under part flow conditions.
<br>
<br>
Psystem=𝜂all P <br>
Psystem=0.82P
Eq. 2
<br>
<br>
According to Kalbiyev (2024), the power generated from the wastewater will follow the momentum-velocity equation for mechanical energy which is directly proportional to the density, the flow rate, and the velocity of the fluid through the system. 
<br>
<br>
P=0.5Qv2
Eq. 3
</p>

    
  `,
  prototype: `
    <h2>Prototype</h2>
    <h3>3D Model</h3>
    <p>With direct inspiration and feasibility from Uchiyama et al. (2017), a hollowed Kaplan turbine will be used in the stack with significant modification. Since at terminal speeds the water forms a thin 6 mm film on the walls of the pipe, the hollow turbine will have blades with lengths of 10 mm to optimize material use to flow conditions; this will cover 36% of the 100 mm stack’s cross sectional area while allowing adequate passage of debris through its center. 
</p>
    <img src="./images/poop-turbine.png" alt="Poop Turbine" />
    <img src="./images/hydro-turbine.png" alt="Hydro Turbine" />
<p>Above the turbine vanes, 12 fixed guide vanes will slightly alter the annular flow to a perpendicular trajectory to the turbine vanes. This allows optimal energy transfer to the turbine vanes. <brbr> According to Uchiyama et al. (2017) design of the hollow turbine, the outer shell is attached to an external belt in order to transfer the mechanical power to the generator. This design will differ by turning the outer shell into the generator itself; consisting of a magnetic coil on the exterior surface with bearings on the top and bottom to guide the turbine’s rotation. The power generated by the turbine will be transferred to a power meter and transformer to measure inbound electricity before connecting directly to the building's power. <brbr> Attaching the turbine to the main stack, a waterproof seal must be maintained. By overlapping the chamfered edges, water flow is disallowed to escape, mimicking regular sink plumbing lines. Plumbing putty is also used to create an airtight seal to prevent venting of gasses. 
</p>
    <img src="./images/image3.png" alt="image3lol" />
<p>When the turbine is manufactured, it will be placed in a protective box with the power metering display. This will allow ease of reading for the user, and ease of installation with minimal damage to fragile internal mechanisms. 
</p>
<h3>Cost Analysis</h3>
<p>Using AI (ChatGPT) and a vast amount of research on prototyping and cost breakdown, the cost analysis for a 5 kW max prototype and real world model are presented in table 1 and 2. <brbr> A functional prototype is naturally the next step in the research process. The prototype will be computer modeled and 3D printed using PETG, a popular and durable plastic printing material. The approximate cost of the prototype is $74-$116 and encompasses a simple “do it yourself” starter kit for an electrical generator. The cheap beginner prototype will allow adequate testing for experimental data and analysis before moving on to a more expensive, metal model.
</p>
   <img src="./images/table1.png" alt="tabilico 1" />
<p>Using higher durability materials like steel and aluminum for the vanes greatly increases fabrication costs, but simulates a real world turbine in action. Also, higher quality materials including bearings, housing, and magnets would be used to eliminate any energy losses for optimal testing data. The approximate cost of this higher quality testing model is $390-$750.</p>
   <img src="./images/table2.png" alt="tabilico 2" />

<p>With feasible costs for prototyping and real world testing- about $100 and $600 respectively, this pico-hydro turbine concept demonstrates strong potential for cost effective implementation. The low prototyping cost of the 3D printed model allows for rapid design iteration, while the moderate expense of a durable test model supports early adoption in pilot installations without requiring a large capital investment. However, while the upfront material and fabrication costs are manageable, a real world model’s viability hinges on maintenance demands, system durability under real wastewater conditions, and regulatory approval for building hydropower infrastructure. Addressing these challenges through pilot testing will be essential to validate this technology's practicality and survivability in urban residential settings.
</p>

  `,
  results: `
    <h2>Results</h2>
    <p>Multistory residential structures, such as apartment complexes, with their frequent and patterned water usage offer ideal conditions for pico-scale hydropower systems. According to the City of Toronto’s 2025 Water Consumption Report, residents in Toronto use an average of 210 liters of water per day, 12% more than the Ontario average. Notably, greywater from fixtures like sinks and showers constitutes 65% of this use. When this vertical flow is captured and directed through microturbine systems, it can provide a meaningful source of renewable energy. Solving equation 2 and 3- using a system efficiency of 82%, water density of 1000 kg/m³, a flow velocity of 5 m/s, and average daily usage of 200 L per person, each individual could generate approximately 2 kW of power per day. <br> <br> When looking at the city of Toronto’s housing occupancy trends for 2021, occupancy of 5+ story high rise buildings exceeds 540 000. When scaled to account for this population, waste energy production potential for the city of Toronto alone lies at 1 GW per day- a significant quantity of otherwise wasted gravitational energy. While not intended to replace centralized grid power, this decentralized energy potential provides a powerful supplement to urban sustainability efforts. Capturing even a fraction of this energy from plumbing infrastructure could meaningfully offset electricity consumption in high density residential buildings and support broader goals of low impact, distributed power production in modern cities.
</p>
<h3>Discussion</h3>
<p>While studies from Uchiyama et al. (2017) and the World Bank (Kiyoko, 2015), provide a basis for pico-scale turbine efficiency and power generation, real world tests are needed to confirm theoretical findings. Gallego’s study on the performance of pico-hydro turbines (2021) supply the experimental system efficiency given as: <br> <br>


efficiency=T/QgH Eq. 4
<br> <br>
where the efficiency of the system is evaluated as the ratio of kinetic energy transferred to the turbine to the potential energy of the water column. 
To further this research, the first step should be 3D modeling and printing the $100 physical scale model to use in a closed loop test. Data should support a theoretical efficiency of less than 80% accounting for increased friction factor from the plastic printing material rather than the use of metal. 
<brbr>
	The next step would be the fabrication of the $600 metal test model with a proper generator to use in pilot testing. This would confirm power production potentials and validate the net benefit to cost analysis. (I would be surprised if this theoretical small turbine innovation reached this step so I will stop here)
<br> <br>In multistory apartment buildings, separated greywater systems create more ideal conditions for retrofitting compact turbines to capture gravitational energy from routine water use. While challenges such as debris accumulation, and regular maintenance are still present, less cleaner wastewater and higher occupancy greatly increase the net benefit of retrofitting highrise complexes. 
<br> <br>Although this paper focuses on the residential sector, presenting a commercially available product for the forward thinking consumer, the application of this technology in the commercial and industrial sector offers even greater viability. Their large, consistent, and often pressurized water flows- used in cooling systems, manufacturing processes, and sanitation, provide a more frequent energy source. The presence of dedicated utility rooms and filtration systems further simplifies turbine installation and maintenance. Additionally, higher heads and greater flows achieved through multi floor and industrial grade machinery increase wastewater energy output.
<br> <br>Despite the numerous studies and computer modeling needed to suggest a probabilistic- and more realistic, net benefit to implementing this innovative technology, the long term benefits, and its theoretical potential for Toronto underscores the viability of wastewater pico-hydropower as the next decentralized and sustainable energy solution.
</p>
<h3>References</h3>
    <img src="./images/r1.png" alt="references1" />
    <img src="./images/r2.png" alt="references2" />
    <img src="./images/r3.png" alt="references3" />



  `,
 about: `
    <h1>About</h1>
<h2>Who's Involved?</h2>
    <img src="./images/me.png" alt="Me" />
<h2>Lorenzo Cutts</h2>

    <p>Currently a second year civil engineering student at TMU <br> <br> Also an established entrepreneur running a woodworking and landscaping business</p>

  `,

};

function setActiveLink(activePage) {
  navLinks.forEach(link => {
    if (link.dataset.page === activePage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function loadPage(page) {
  if (!pages[page]) page = "home";
  contentDiv.innerHTML = pages[page];
  setActiveLink(page);
  // Update URL hash for bookmarking/navigation
  window.location.hash = page;
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
  });
});

// Load initial page based on hash or default to home
const initialPage = window.location.hash.replace("#", "") || "home";
loadPage(initialPage);
