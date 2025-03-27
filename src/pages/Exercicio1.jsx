import { verificarResultado, reiniciarExercicio, embaralharCores, drop, dragOver, dragStart } from '../../public/assets/js/exercicio1.js';
import '../../public/assets/css/exercicio1.css';
import { useEffect, useRef } from 'react';
import { toggleVisablity } from '../utils/utilidades.js'

const Exercicio1 = () => {
    const resultadoRef = useRef(null);

    useEffect(() => {
        embaralharCores();

        window.addEventListener('drop', e => {
            drop(e);
        })

        const colors = document.querySelectorAll('.color');
        const slots = document.querySelectorAll('.slot');

        colors.forEach(color => {
            color.addEventListener('dragstart', dragStart);
        });

        slots.forEach(slot => {
            slot.addEventListener('dragover', dragOver);
            slot.addEventListener('drop', drop);
        });

        return () => {
            colors.forEach(color => {
                color.removeEventListener('dragstart', dragStart);
            });

            slots.forEach(slot => {
                slot.removeEventListener('dragover', dragOver);
                slot.removeEventListener('drop', drop);
            });
        };
    }, []);

    const handleVerificarResultado = () => {
        verificarResultado();
        if (resultadoRef.current) {
            resultadoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="rainbow-section">
                <div className="container">
                    <h2>Organize as Cores do Arco-Íris</h2>
                    <p>Arraste e solte as cores na ordem correta do arco-íris!</p>

                    <div className="rainbow-slots">
                        <div className="slot" id="slot-1"></div>
                        <div className="slot" id="slot-2"></div>
                        <div className="slot" id="slot-3"></div>
                        <div className="slot" id="slot-4"></div>
                        <div className="slot" id="slot-5"></div>
                        <div className="slot" id="slot-6"></div>
                        <div className="slot" id="slot-7"></div>
                    </div>

                    <div className="color-palette">
                        <div className="color" id="red" draggable="true" style={{ backgroundColor: 'red' }}></div>
                        <div className="color" id="orange" draggable="true" style={{ backgroundColor: 'orange' }}></div>
                        <div className="color" id="yellow" draggable="true" style={{ backgroundColor: 'yellow' }}></div>
                        <div className="color" id="green" draggable="true" style={{ backgroundColor: 'green' }}></div>
                        <div className="color" id="blue" draggable="true" style={{ backgroundColor: 'blue' }}></div>
                        <div className="color" id="indigo" draggable="true" style={{ backgroundColor: 'indigo' }}></div>
                        <div className="color" id="violet" draggable="true" style={{ backgroundColor: 'violet' }}></div>
                    </div>

                    <button className="btn" onClick={() => handleVerificarResultado()}>Verificar</button>
                    <button className="btn" onClick={() => reiniciarExercicio()}>Reiniciar</button>

                    <p id='resultado'></p>

                    <div id="personagem" className="personagem" onClick={() => toggleVisablity('personagem')} style={{ visibility: 'visible' }}>
                        <img src="/img/ana.png" alt="Ana" />
                        <div className="text-content">
                            <p id="instructions">Consegue me ajudar a ordenar as cores do arco-íris.</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Exercicio1;
