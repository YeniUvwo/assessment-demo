// ======================================
// ENTERPRISE CLASSIFICATION
// ======================================

function getEnterpriseClassification(model){

    const classifications = {
        recovery: "Resource Recovery Enterprise",
        transformation: "Circular Manufacturing Enterprise",
        reuse: "Product Life Extension Enterprise",
        sharing: "Sharing Economy Enterprise",
        regenerative: "Regenerative Enterprise",
        technology: "Circular Technology Enabler"
    };

    return classifications[model] ||
           "Circular Enterprise";

}

// ======================================
// ECOSYSTEM SIGNIFICANCE
// ======================================

function getEcosystemSignificance(
    industry,
    resourceInput,
    impactTheme
){

    return `This enterprise operates within the ${industry}
    ecosystem and contributes to ${impactTheme.toLowerCase()}
    through the utilization of ${resourceInput.toLowerCase()}
    as part of its circular value creation approach.`;

}

// ======================================
// PLATFORM INSIGHT
// ======================================

function generateInsight(
    industry,
    classification,
    resourceInput,
    stakeholders
){

    return `This enterprise demonstrates characteristics of a
    ${classification}. By utilizing ${resourceInput.toLowerCase()}
    and engaging stakeholders such as ${stakeholders},
    it contributes to circular value creation within the
    ${industry.toLowerCase()} sector.`;

}

// ======================================
// INNOVATION SCORE
// ======================================

function calculateInnovationScore(){

    let score = 0;

    const indicators = [
        "wasteInput",
        "traceability",
        "localJobs",
        "partnerships",
        "resourceEfficiency"
    ];

    indicators.forEach(id => {

        const checkbox =
            document.getElementById(id);

        if(checkbox && checkbox.checked){
            score += 20;
        }

    });

    return {
        score: Math.min(score,100)
    };

}

// ======================================
// BUSINESS CAPACITY
// ======================================

function calculateBusinessCapacityScore(
    revenue,
    employees
){

    let score = 0;

    if(revenue > 10000) score += 25;
    if(revenue > 50000) score += 25;

    if(employees >= 5) score += 25;
    if(employees >= 20) score += 25;

    return Math.min(score,100);

}

// ======================================
// CIRCULARITY SCORE
// ======================================

function calculateCircularityScore(){

    let score = 0;

    const dna =
        document.querySelectorAll(
            ".circularDNA:checked"
        );

    score += dna.length * 10;

    const wastePercent =
        parseInt(
            document.getElementById(
                "wastePercentage"
            ).value
        ) || 0;

    score += wastePercent / 2;

    return Math.min(
        Math.round(score),
        100
    );

}

// ======================================
// ECOSYSTEM STRENGTH
// ======================================

function calculateEcosystemStrength(){

    const stakeholders =
        document.querySelectorAll(
            ".stakeholder:checked"
        );

    return Math.min(
        stakeholders.length * 10,
        100
    );

}

// ======================================
// RESOURCE CIRCULARITY
// ======================================

function calculateResourceCircularity(){

    const wasteInput =
        parseInt(
            document.getElementById(
                "wastePercentage"
            ).value
        ) || 0;

    const recovery =
        parseInt(
            document.getElementById(
                "recoveryPercentage"
            ).value
        ) || 0;

    return Math.round(
        (wasteInput + recovery) / 2
    );

}

// ======================================
// DIGITAL READINESS
// ======================================

function calculateCapabilityScore(){

    const capabilities =
        document.querySelectorAll(
            ".capability:checked"
        );

    return Math.min(
        capabilities.length * 15,
        100
    );

}

// ======================================
// RISK PROFILE
// ======================================

function calculateConstraintRisk(){

    const constraints =
        document.querySelectorAll(
            ".constraint:checked"
        );

    const score =
        constraints.length * 10;

    if(score <= 20){
        return "Low Risk";
    }

    if(score <= 40){
        return "Moderate Risk";
    }

    return "High Risk";

}

// ======================================
// SUPPORT PATH
// ======================================

function getSupportPath(
    revenue,
    employees
){

    if(
        revenue < 10000 &&
        employees < 5
    ){
        return "Early Stage Capacity Building";
    }

    if(
        revenue < 50000 &&
        employees < 20
    ){
        return "Growth & Scale Support";
    }

    return "Strategic Ecosystem Partner";

}

// ======================================
// MATURITY LEVEL
// ======================================

function determineMaturity(
    business,
    circularity,
    innovation,
    ecosystem
){

    const average =
        (
            business +
            circularity +
            innovation +
            ecosystem
        ) / 4;

    if(average < 30){
        return "Emerging";
    }

    if(average < 50){
        return "Developing";
    }

    if(average < 70){
        return "Established";
    }

    if(average < 85){
        return "Advanced";
    }

    return "Leading";

}

function getMaturityBadge(level){

    switch(level){

        case "Emerging":
            return "score-emerging";

        case "Developing":
            return "score-developing";

        case "Established":
            return "score-established";

        case "Advanced":
            return "score-advanced";

        case "Leading":
            return "score-leading";

        default:
            return "score-established";
    }

}