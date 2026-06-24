const startBtn = document.getElementById("startBtn");
const assessmentContainer = document.getElementById("assessmentContainer");
const progressBar = document.getElementById("progressBar");

let currentStep = 0;

// =====================================
// STEP INDICATOR
// =====================================

function updateStepIndicator(step){

    const indicators =
        document.querySelectorAll(
            ".step-indicator span"
        );

    indicators.forEach((item,index)=>{

        item.classList.remove(
            "active",
            "completed"
        );

        if(index < step - 1){
            item.classList.add("completed");
        }

        if(index === step - 1){
            item.classList.add("active");
        }

    });

}

// =====================================
// ERROR HANDLING
// =====================================

function showError(message){

    const box =
        document.getElementById("errorBox");

    box.textContent = message;

    box.classList.remove("d-none");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function clearError(){

    const box =
        document.getElementById("errorBox");

    box.textContent = "";

    box.classList.add("d-none");

}

// =====================================
// INDUSTRY TOGGLE
// =====================================

document
.getElementById("industry")
.addEventListener("change", function(){

    document
    .getElementById("otherIndustryWrapper")
    .classList.toggle(
        "d-none",
        this.value !== "other"
    );

});

document
.getElementById("resourceInput")
.addEventListener("change", function(){

    document
    .getElementById("otherResourceWrapper")
    .classList.toggle(
        "d-none",
        this.value !== "other"
    );

});

document
.getElementById("outputDestination")
.addEventListener("change", function(){

    document
    .getElementById("otherOutputWrapper")
    .classList.toggle(
        "d-none",
        this.value !== "other"
    );

});

document
.getElementById("enterpriseStage")
.addEventListener("change", function(){

    document
    .getElementById("otherStageWrapper")
    .classList.toggle(
        "d-none",
        this.value !== "other"
    );

});

document
.getElementById("marketReach")
.addEventListener("change", function(){

    document
    .getElementById("otherMarketWrapper")
    .classList.toggle(
        "d-none",
        this.value !== "other"
    );

});

document
.getElementById("otherStakeholder")
.addEventListener("change", function(){

    document
    .getElementById("otherStakeholderWrapper")
    .classList.toggle(
        "d-none",
        !this.checked
    );

});

// =====================================
// MODEL CARD SELECTION
// =====================================

document
.querySelectorAll(".model-option")
.forEach(card => {

    card.addEventListener("click", () => {

        document
        .querySelectorAll(".model-option")
        .forEach(c =>
            c.classList.remove("selected")
        );

        card.classList.add("selected");

        const radio =
            card.querySelector(
                'input[type="radio"]'
            );

        if(radio){
            radio.checked = true;
        }

    });

});

// =====================================
// PROGRESS BAR
// =====================================

function updateProgress(percent){

    progressBar.style.width =
        percent + "%";

}

// =====================================
// START
// =====================================

startBtn.addEventListener("click", () => {

    assessmentContainer
        .classList.remove("d-none");

    startBtn
        .closest(".hero")
        .classList.add("d-none");

    updateProgress(20);

    updateStepIndicator(1);

});

// =====================================
// NEXT BUTTONS
// =====================================

document
.querySelectorAll(".nextBtn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        clearError();

        // STEP 1

        if(currentStep === 0){

            const businessName =
                document.getElementById(
                    "businessName"
                ).value.trim();

            const country =
                document.getElementById(
                    "country"
                ).value.trim();

            const industry =
                document.getElementById(
                    "industry"
                ).value;

            const years =
                parseInt(
                    document.getElementById(
                        "yearsOperation"
                    ).value
                ) || 0;

            const model =
                document.querySelector(
                    'input[name="circularModel"]:checked'
                );

            const impactTheme =
                document.getElementById(
                    "impactTheme"
                ).value;

            if(!businessName){
                showError(
                    "Please enter business name."
                );
                return;
            }

            if(!country){
                showError(
                    "Please enter country."
                );
                return;
            }

            if(!industry){
                showError(
                    "Please select an industry."
                );
                return;
            }

            if(years < 1){
                showError(
                    "Years in operation must be at least 1."
                );
                return;
            }

            if(!model){
                showError(
                    "Please select a circular business model."
                );
                return;
            }

            if(!impactTheme){
                showError(
                    "Please select a primary impact area."
                );
                return;
            }

            document
            .getElementById("step1")
            .classList.add("d-none");

            document
            .getElementById("step2")
            .classList.remove("d-none");

            currentStep = 1;

            updateProgress(40);

            updateStepIndicator(2);

            return;
        }

        // STEP 2

        if(currentStep === 1){

            const resourceInput =
                document.getElementById(
                    "resourceInput"
                ).value;

            const outputDestination =
                document.getElementById(
                    "outputDestination"
                ).value;

            const stakeholders =
                document.querySelectorAll(
                    ".stakeholder:checked"
                );

            if(!resourceInput){
                showError(
                    "Please select a resource input."
                );
                return;
            }

            if(!outputDestination){
                showError(
                    "Please select an output destination."
                );
                return;
            }

            if(stakeholders.length === 0){
                showError(
                    "Please select at least one stakeholder."
                );
                return;
            }

            document
            .getElementById("step2")
            .classList.add("d-none");

            document
            .getElementById("step3")
            .classList.remove("d-none");

            currentStep = 2;

            updateProgress(60);

            updateStepIndicator(3);

            return;
        }

        // STEP 3

        if(currentStep === 2){

            const dna =
                document.querySelectorAll(
                    ".circularDNA:checked"
                );

            if(dna.length === 0){

                showError(
                    "Please select at least one circular activity."
                );

                return;
            }

            document
            .getElementById("step3")
            .classList.add("d-none");

            document
            .getElementById("step4")
            .classList.remove("d-none");

            currentStep = 3;

            updateProgress(80);

            updateStepIndicator(4);

            return;
        }

        // STEP 4

        if(currentStep === 3){

            const revenue =
                parseFloat(
                    document.getElementById(
                        "totalRevenue"
                    ).value
                ) || 0;

            const employees =
                parseInt(
                    document.getElementById(
                        "employees"
                    ).value
                ) || 0;

            if(revenue <= 0){

                showError(
                    "Please enter total revenue."
                );

                return;
            }

            if(employees < 1){

                showError(
                    "Please enter employee count."
                );

                return;
            }

            document
            .getElementById("step4")
            .classList.add("d-none");

            document
            .getElementById("step5")
            .classList.remove("d-none");

            currentStep = 4;

            updateProgress(90);

            updateStepIndicator(5);

            return;
        }

    });

});

// =====================================
// GENERATE REPORT
// =====================================

document
.querySelector(".finishBtn")
.addEventListener("click", () => {

    clearError();

    const revenue =
        parseFloat(
            document.getElementById(
                "totalRevenue"
            ).value
        ) || 0;

    const employees =
        parseInt(
            document.getElementById(
                "employees"
            ).value
        ) || 0;

    const businessCapacity =
        calculateBusinessCapacityScore(
            revenue,
            employees
        );

    const circularity =
        calculateCircularityScore();

    const innovation =
        calculateInnovationScore().score;

    const ecosystem =
        calculateEcosystemStrength();

    const maturity =
        determineMaturity(
            businessCapacity,
            circularity,
            innovation,
            ecosystem
        );

    const resourceCircularity =
        calculateResourceCircularity();

    const digitalReadiness =
        calculateCapabilityScore();

    const riskProfile =
        calculateConstraintRisk();

    const industry =
        document.getElementById("industry")
        .value;

    const impactTheme =
        document.getElementById("impactTheme")
        .value;

    const resourceInput =
        document.getElementById("resourceInput")
        .value;

    const outputDestination =
        document.getElementById("outputDestination")
        .value;

    const model =
        document.querySelector(
            'input[name="circularModel"]:checked'
        ).value;

    const stakeholders =
        Array.from(
            document.querySelectorAll(
                ".stakeholder:checked"
            )
        )
        .map(item => item.value)
        .join(", ");

    const dna =
        Array.from(
            document.querySelectorAll(
                ".circularDNA:checked"
            )
        )
        .map(item => item.value)
        .join(", ");

    const capabilities =
        Array.from(
            document.querySelectorAll(
                ".capability:checked"
            )
        )
        .map(item => item.value)
        .join(", ");

    const constraints =
        Array.from(
            document.querySelectorAll(
                ".constraint:checked"
            )
        )
        .map(item => item.value)
        .join(", ");

    const classification =
        getEnterpriseClassification(model);

    // SCORES

    document.getElementById("businessCapacityScore")
        .textContent = businessCapacity + "%";

    document.getElementById("circularityScore")
        .textContent = circularity + "%";

    document.getElementById("innovationScore")
        .textContent = innovation + "%";

    document.getElementById("ecosystemScore")
        .textContent = ecosystem + "%";

    if(document.getElementById("resourceCircularity")){
        document.getElementById("resourceCircularity")
            .textContent =
            resourceCircularity + "%";
    }

    if(document.getElementById("digitalReadiness")){
        document.getElementById("digitalReadiness")
            .textContent =
            digitalReadiness + "%";
    }

    if(document.getElementById("riskProfile")){
        document.getElementById("riskProfile")
            .textContent =
            riskProfile;
    }

    const maturityElement =
        document.getElementById(
            "circularitymaturity"
        );

    maturityElement.textContent =
        maturity;

    if(typeof getMaturityBadge === "function"){
        maturityElement.className =
            "score-badge " +
            getMaturityBadge(maturity);
    }

    // PROFILE

    document.getElementById("enterpriseClassification")
        .textContent = classification;

    document.getElementById("industryResult")
        .textContent = industry;

    document.getElementById("impactThemeResult")
        .textContent = impactTheme;

    document.getElementById("circularModelResult")
        .textContent = classification;

    document.getElementById("resourceInputResult")
        .textContent = resourceInput;

    document.getElementById("outputDestinationResult")
        .textContent = outputDestination;

    document.getElementById("stakeholderResult")
        .textContent = stakeholders;

    document.getElementById("dnaResult")
        .textContent = dna;

    document.getElementById("capabilityResult")
        .textContent = capabilities;

    document.getElementById("constraintResult")
        .textContent = constraints;

    // INSIGHTS

    document.getElementById("ecosystemSignificance")
        .textContent =
        getEcosystemSignificance(
            industry,
            resourceInput,
            impactTheme
        );

    document.getElementById("insightText")
        .textContent =
        generateInsight(
            industry,
            classification,
            resourceInput,
            stakeholders
        );

    document.getElementById("supportPath")
        .textContent =
        getSupportPath(
            revenue,
            employees
        );

    // SHOW SUMMARY

    document.getElementById("step5")
        .classList.add("d-none");

    document.getElementById("summary")
        .classList.remove("d-none");

    updateProgress(100);

});