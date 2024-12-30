const fs = require('fs').promises;

const filePath = "../data/faculty.json";

async function getCoordinatorData() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing JSON file:', err);
    }
}

async function getCoordinatorBySection(section) {
    const data = await getCoordinatorData();

    if (!data) {
        return 'No data found.';
    }

    const coordinator = data.find(coord => coord.section == section);
    return coordinator || 'Section not found';
}


module.exports = {
    getCoordinatorBySection
};
