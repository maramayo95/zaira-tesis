export let opts = {
    balloon: {                       // default settings for a balloon
        earnings:        0.05,       // potential earnings for each pump
        popprob:         128,        // probability of popping (as 1 out of X)
        radius:          48,         // balloon size
        increment:       0.01,       // increment size of balloon at each pump
        color:           '#DA110D',  // color of balloon
        stroke_style:    '#000000',  // color of balloon stroke
        stroke_width:    3,          // width of balloon stroke
        gradient_radius: 3,          // relative size of gradient
        gradient_color:  '#E1E1E1',  // color of balloon gradient
        gradient_factor: 0.3,        // overlay factor of gradient
        width_factor:    0.03333,    //
        height_factor:   0.4,        //
        tie_width:       8,          // width of tie
        onstart: function() {},      // function to run on new balloon
        oninflate: function() {},    // function to run after inflation
        onexplode: function() {}     // function to run after explosion
    },
    bgcol:               '#FFF',     // background color for complete board
    w:                   600,        // width of board (in pixel)
    h:                   600,        // height of board (in pixel)
    showpumpcount: true,             // show number of pumps on board
    showballooncount:  true,         // show number of balloons on board
    showcurrentearned: true,         // show potential earnings on board
    showtotalearned: true,           // show total earnings on board
    showpopprob: false,              // show probability of explosion
    showpumpsused: false,            // show percentage of pumps used
    sounds: true,                    // play sounds
    earned: 0,                       // initial earnings
    sndpath: 'sounds/',              // path to sound files
    randomize:       true,           // randomize order of balloons
    frmid:           'bartdat',      // hidden form element to save all data to
    separator:       [':', ';'],     // value separators in hidden form field (0: within in balloon, 1: between ballons)
    frmids_pumps:    [],  // optional ids of hidden form elements to save 
                                     //    number of pumps for each balloon
    frmids_exploded: [],  // optional ids of hidden form elements to save 
                                     //    number of explosions for each balloon
    frmids_time:     [],             // optional ids of hidden form elements to save 
                                     //    mean latency between pumps (excluding time before first pump)
    txt_cashin: '$$ Cash in $$',     // text on 'Cash in' button
    txt_inflate: 'Inflate balloon',  // text on 'Inflate' button
    txt_next:    'Next balloon',     // text on 'Next' button
    txt_balloon_number: 'Balloon number: ',          // text for balloon number
    txt_number_of_pumps: 'Number of pumps: ',        // text for number of pumps
    txt_current_earned: 'Current earned: ',          // text for current earnings
    txt_total_earned: 'Total earned: ',              // text for total earnings
    txt_prob_explosion: 'Probability of explosion:', // text for probability of explosion
    txt_pumps_used: 'Max. available pumps used:',    // text for percentage of used pumps
    onload:    function() {},        // function to run before loading the script 
    onend:    function() {}          // function to run after finishing the last balloon 
};




