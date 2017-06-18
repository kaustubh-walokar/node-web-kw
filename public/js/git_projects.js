/**
 * Created by kaustubh on 12/19/16.
 */
$('document').ready(function(){
    var item = '<div class="columns portfolio-item pfi"> ' +
        '<div class="card"> ' +
        '<div class="card-content"> ' +
        '<span class="card-title">' +
        '<a href={link} target="_blank"> {name} </a>' +
        '</span> ' +
        '<p>{description}</p> ' +
        '</div> ' +
        '<div class="card-action"> ' +
        '<a href={link} target="new_blank"><i class="fa fa-github"></i> {name}</a> ' +
        '</div></div></div>';

    var portfolio=$('#portfolio-wrapper');

    function makeItem(i) {
        var child=item;
        for(var key in i){
            child = child.replace(new RegExp("\\{" + key + "\\}", "g"),i[key])
        }
        portfolio.append(child);
    }

    $.getJSON('git-projects.json',function(data){
        data.projects.forEach(makeItem);
    });
});
