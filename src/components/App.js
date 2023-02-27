import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'

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
        <section className="container">
            <section>
                <h1>Caculorie</h1>
                <q>Rire est le meilleur brûleur de calories.</q>
            </section>
            <hr />
	        <div className="row">
                <form className="form-inline form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="gender">Bonjour, je suis un <span>votre sexe</span></label>
                        <select id="gender" value={gender} onChange={e => {setGender(e.target.value)}} required >
                            <option value="">Genre</option>
                            <option value="true">Homme</option>
                            <option value="false">Femme</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="poids"> Je pèse un bon <span>votre poids</span></label>
                        <input id="poids" placeholder='Poids(kg)' value={weight} onChange={e => {setWeight(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taille"> J'atteins des sommets avec mes <span> votre taille </span></label>
                        <input id="taille" placeholder='Taille(cm)' value={height} onChange={e => {setHeight(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age"> J'ai toutes mes dents <span>votre âge</span></label>
                        <input id="age" placeholder='Age' value={age} onChange={e => {setAge(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="activity"> Mon activité de la journée conciste à <span>votre activité</span></label>
                        <select id="activity" value={activity} onChange={e => {setActivity(e.target.value)}} required>
                            <option value="">Activité ?</option>
                            <option value="1">Journée passée au repos allongé</option>
                            <option value="1.2">Travail sédentaire assis, pas de sport</option>
                            <option value="1.4">Travail sédentaire assis, 30 minutes de marche</option>
                            <option value="1.6">Travail sédentaire et 1h de sport</option>
                            <option value="1.7">Travail sédentaire et 1h30 à 2h de sport</option>
                            <option value="1.9">Travail physique avec beaucoup de déplacement et 1h30 de sport</option>
                            <option value="2">Travail physique et 3h à 4h de sport</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-default btn-lg submit">Calculer</button>
                </form>
                <section>
                    {calorie == null || calorie == undefined || calorie == "" ? "" : <h2>J'ai besoin de {calorie} par jour !</h2>}
                </section>
            </div>
        </section>
    );
}

export default App;
