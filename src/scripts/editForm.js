const buildEditForm = (singleTaskParam) => {
return `
<section class="row" id="new-task-form">
<div class="input-field col s6">
    <input value="${singleTaskParam.name}" id="task-input-edit-${singleTaskParam.id}" type="text" class="validate">
</div>
<div class="input-field col s4">
    <input id="date-input-edit-${singleTaskParam.id}" type="date" class="validate" value="${singleTaskParam.dueDate}">
</div>
<div class="input-field col s8">
    <input id="description-input-edit-${singleTaskParam.id}" value="${singleTaskParam.description}" type="text" class="validate">
</div>
<input type="hidden" id="completed-edit-input-${singleTaskParam.id}" value=${singleTaskParam.completed}>
<div class="col s3 valign-wrapper">
    <a class="btn-floating btn waves-effect waves-light teal accent-3"><i id="save-edit-btn-${singleTaskParam.id}" class="material-icons save-btn">save</i></a>
</div>
</section>`
}