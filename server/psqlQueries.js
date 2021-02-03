module.exports.getPeopleQuery = () =>
  `SELECT * FROM people`;

module.exports.getSelectedIdeasQuery = (id) =>
  `SELECT idea, notes, ideaid FROM ideas
  NATURAL JOIN people
  NATURAL JOIN peopleideajoin
  WHERE peopleid = ${id}`;

module.exports.peopleInsertQuery = (name, relationship) =>
  `INSERT INTO people (
    name,
    relationship
  ) VALUES (
    '${name}', '${relationship}'
  )`;

module.exports.ideaInsertQuery = (idea, notes) =>
  `INSERT INTO ideas (
    idea,
    notes
  ) VALUES (
    '${idea}', '${notes}'
  ) RETURNING ideaid`;

module.exports.peopleIdeaJoinInsert = (peopleid, ideaid) =>
  `INSERT INTO peopleIdeaJoin (
    peopleID,
    ideaID
  ) VALUES (
    ${peopleid}, ${ideaid}
  )`