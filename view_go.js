(function() {
var view = {}


view.add_circ = function (x,y) {

    model.nosql_push('circ_data',{'cx':x,'cy':y,'r':2,'fill':dol_color})
    model.nosql_push('list_go', x + 10000*y)

    model.backup_data('circ_data','circ_back')
    model.backup_data('list_go','list_back')

    dol_color = dol_color == 'black' ? 'white' : 'black' 

    view.refresh() 

}

view.remove_circ = function (all) {

    if (all == 1)
    {
        model.init_list('circ_data')
        model.init_list('list_go')
    }
    else
    {
       model.pop('circ_data') //마지막만 제거
       model.pop('list_go')
    }

    dol_color = dol_color == 'black' ? 'white' : 'black' 

    view.refresh()
}

view.refresh = function() {

//    var selection =  d3.select('svg').selectAll('circle').data(model.call_data('circ_data'))

    selection.data(circ_data).enter().append('circle')
            .attr('cx',function(d){return d.cx})
            .attr('cy',function(d){return d.cy})
            .attr('r',function(d){return d.r})
            .attr('fill',function(d){return d.fill})

    selection.exit().remove()
}



//백업
view.recover = function () {

    model.recover_data('circ_data','circ_back')
    model.recover_data('list_go','list_back')

    view.refresh()
    }

  if (typeof define === "function" && define.amd) this.view = view, define(view); else if (typeof module === "object" && module.exports) module.exports = view; else this.view = view;
})()
