        $(document).ready(function() {
            $('.tooltip').tooltipster({
//                theme: 'tooltipster-noir',
                contentAsHTML: true,
                multiple: false,
                onlyOne: true,
                minWidth: 220,
                minHeight: 1800,
                offset: [-100, 120],
                delay: 0,
                animationDuration: 400,
                animation: 'fade',
                trigger: 'hover',
                plugins: ['follower']
            });
        });
