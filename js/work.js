window.addEventListener('scroll', function() {
    const section = document.querySelector('#works');
    const steps = document.querySelectorAll('.step');
    const totalHeight = section.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY - section.offsetTop;

    let currentStepIndex = Math.floor((currentScroll / totalHeight) * steps.length);

    // Ensure the current section index is within range
    if (currentStepIndex >= steps.length) {
        currentStepIndex = steps.length - 1;
    } else if (currentStepIndex < 0) {
        currentStepIndex = 0;
    }

    steps.forEach((step, index) => {
        step.classList.remove('active');
        if (index === currentStepIndex) {
            step.classList.add('active');
        }
    });

    // Update the counter and line progress
    const activeStep = steps[currentStepIndex];
    const counter = activeStep.querySelector('.counter').textContent;
    document.querySelector('.counter').textContent = counter;

    // Update the vertical line's progress
    const progress = (currentStepIndex + 1) / steps.length;
    document.querySelector('.vertical-line').style.transform = `scaleY(${progress})`;
});