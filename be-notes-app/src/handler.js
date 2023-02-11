const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNewNotesHandler = (request, h) => {
  console.log('add new note');
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNotes = {
    title, tags, body, id, createdAt, updatedAt
  }

  notes.push(newNotes);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (!isSuccess) {
    const response = h.response({
      status: 'fail',
      message: 'Failed to send new notes',
    })

    response.code(500);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'New notes added!',
  })

  return response;
}

const getAllNotesHandler = (request, h) => {
  console.log('get all notes nih');
  const response = h.response({
    status: 'success',
    message: 'mantap jiwa anjay',
    data: {
      notes,
    }
  });

  response.code(200);
  return response;
}

const getNoteByIdHandler = (request, h) => {
  console.log('get single data');
  const { id } = request.params;

  const note = notes.find((note) => note.id === id);

  if (!note) {
    const response = h.response({
      status: 'failed',
      message: 'failed to get data',
    });

    response.code(404)
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'get data',
    data: {
      note,
    }
  });

  response.code(200)
  return response;
}

const updateNoteByIdHandler = (request, h) => {
  console.log('update data baru');
  const { id } = request.params;
  const { title, tags, body } = request.payload;

  const indexOfNote = notes.findIndex((note) => note.id === id);

  console.log(indexOfNote);
  if (indexOfNote === -1) {
    const response = h.response({
      status: 'failed',
      message: 'not a valid id',
    })

    response.code(404);
    return response;
  }

  const updatedAt = new Date().toISOString();

  notes[indexOfNote] = {
    ...notes[indexOfNote],
    title,
    tags,
    body,
    updatedAt,
  }

  const response = h.response({
    status: 'success udpate new data',
  });

  response.code(200);
  return response;
}

const deleteNoteByIdHandler = (request, h) => {
  console.log('delete data');
  const { id } = request.params;

  const note = notes.find((note) => id === note.id);
  const response = h.response(({
    status: 'success',
    message: 'deleting',
    data: {
      note,
    }
  }))

  response.code(200);
  return response
}

module.exports = {
  addNewNotesHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
  deleteNoteByIdHandler,
};