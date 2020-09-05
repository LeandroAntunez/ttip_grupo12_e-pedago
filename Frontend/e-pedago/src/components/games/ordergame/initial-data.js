const initialData ={
    boxes: {
        'box-1': { id: 'box-1', content: '1'},
        'box-2': { id: 'box-2', content: '2'},
        'box-3': { id: 'box-3', content: '3'},
        'box-4': { id: 'box-4', content: '4'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Ordenar',
            boxIds: ['box-1', 'box-2', 'box-3', 'box-4']
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],   
}

export default initialData