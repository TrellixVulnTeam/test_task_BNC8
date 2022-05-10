import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import jQuery from "jquery";
import Chart from 'chart.js';



const ctx = document.getElementById('firstChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', ''],
        datasets: [{
            data: [28, 154, 116, 184],
            backgroundColor: [
                '#26B9FF',
                '#2EE6FF',
                '#26B9FF',
                '#2D8EFF',
            ],
        }]

    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        events: [],
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false,
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }


});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
if (window.matchMedia("(max-width: 576px)").matches) {
    $('#accordionSidebar').removeClass('active');
} else {

}

(function($) {
    var width = screen.width;
    if (width > 768) {
        $('#accordionSidebar').addClass('active');


    } else {
        $('#accordionSidebar').hide();
        $('#accordionSidebar').removeClass('active');
        if (!$("#accordionSidebar").hasClass("active")) {
            $('#burger').removeClass('active');
        }


    }
    $(window).on('resize', function() {
        var win = $(this);
        if (win.width() > 768) {
            $('#accordionSidebar').addClass('active');


        } else {
            if (!$("#accordionSidebar").hasClass("active")) {
                $('#burger').removeClass('active');
            }
            $('#accordionSidebar').removeClass('active');

        }
    });

})(jQuery);