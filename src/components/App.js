import React, {useState} from 'react';

function App() {

    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [activity, setActivity] = useState('')
    const [calorie, setCalorie] = useState('')

    const mbhomme = 66.5+(13.75*weight)+(5*height)-(6.77*age)
    const mbfemme = 655.1 + (9.56*weight)+(1.85*height)-(4.67*age)

    const handleSubmit = (e) => {
        e.preventDefault()
        setCalorie(gender ? Math.floor(mbhomme*activity) : Math.floor(mbfemme*activity))       
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <select value={gender} onChange={e => {setGender(e.target.value)}}>
                        <option value="">Sélectionner votre sexe</option>
                        <option value="true">Homme</option>
                        <option value="false">Femme</option>
                    </select>
                    <input placeholder='poids' value={weight} onChange={e => {setWeight(e.target.value)}} required />
                    <input placeholder='taille' value={height} onChange={e => {setHeight(e.target.value)}} required />
                    <input placeholder='age' value={age} onChange={e => {setAge(e.target.value)}} required />
                    <select value={activity} onChange={e => {setActivity(e.target.value)}}>
                        <option value="">Sélectionner votre activité</option>
                        <option value="1">Journée passée au repos allongé</option>
                        <option value="1.2">Travail sédentaire assis, pas de sport</option>
                        <option value="1.4">Travail sédentaire assis, 30 minutes de marche</option>
                        <option value="1.6">Travail sédentaire et 1h de sport</option>
                        <option value="1.7">Travail sédentaire et 1h30 à 2h de sport</option>
                        <option value="1.9">Travail physique avec beaucoup de déplacement et 1h30 de sport</option>
                        <option value="2">Travail physique et 3h à 4h de sport</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Calculer</button>
            </form>
            <section>
                <h2>{calorie}</h2>
            </section>
        </>
    );
}

export default App;
