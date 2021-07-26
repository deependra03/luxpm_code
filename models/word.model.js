module.exports = (sequelize, Sequelize) => {
    const Word = sequelize.define('word', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        letter: { type: Sequelize.STRING, allowNull: false },
        type: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    });

    return Word;
}