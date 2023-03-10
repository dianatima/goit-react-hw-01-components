import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {randomColor} from './randColor';

export const Statistic = ({title, stats}) => {
    return (
        <>
        <section className={css.statistics}>
             <h2 className={css.title}>{title}</h2>

             <ul className={css.statList}>
             {stats.map(({id, label, percentage}) => {
                return (    
                 <li className={css.item} key={id} 
                 style={{ backgroundColor: randomColor() }}
                    >
                     <span className={css.label}>{label}</span>
                     <span className={css.percentage}>{percentage}%</span>
                </li>
                )
            })}
            </ul>
        </section>
        </>
    )
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
  };