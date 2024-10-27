window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;

    // Adjust the trigger point to be earlier in the scroll
    const triggerPoint = document.documentElement.scrollHeight * 0.46; // Trigger slightly earlier than halfway

    // Target the elements for color change
    const doWord = document.querySelector('.do-word');
    const ntWord = document.querySelector('.nt-word');
    const designWord = document.querySelector('.design-word');

    if (scrollPosition > triggerPoint) {
        // Apply the coloured-text-5 class to these specific words
        doWord.classList.add('coloured-text-5');
        designWord.classList.add('coloured-text-5');
        
        // Ensure "n't" stays after "Do" by programmatically placing it in the DOM
        ntWord.parentNode.insertBefore(ntWord, doWord.nextSibling);
    } else {
        // Remove the class if you scroll back up (optional)
        doWord.classList.remove('coloured-text-5');
        designWord.classList.remove('coloured-text-5');
    }
});