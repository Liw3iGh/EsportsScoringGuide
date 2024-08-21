function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabName ? 'block' : 'none';
    });
}

function calculateKills() {
    const map1 = parseInt(document.getElementById('map1Kills').value) || 0;
    const map2 = parseInt(document.getElementById('map2Kills').value) || 0;
    const map3 = parseInt(document.getElementById('map3Kills').value) || 0;
    const map4 = parseInt(document.getElementById('map4Kills').value) || 0;
    const map5 = parseInt(document.getElementById('map5Kills').value) || 0;
    const totalKills = map1 + map2 + map3 + map4 + map5;
    document.getElementById('totalKills').innerText = `Total Kills: ${totalKills}`;
}

function calculateAssists() {
    const map1 = parseInt(document.getElementById('map1Assists').value) || 0;
    const map2 = parseInt(document.getElementById('map2Assists').value) || 0;
    const map3 = parseInt(document.getElementById('map3Assists').value) || 0;
    const map4 = parseInt(document.getElementById('map4Assists').value) || 0;
    const map5 = parseInt(document.getElementById('map5Assists').value) || 0;
    const totalAssists = map1 + map2 + map3 + map4 + map5;
    document.getElementById('totalAssists').innerText = `Total Assists: ${totalAssists}`;
}
