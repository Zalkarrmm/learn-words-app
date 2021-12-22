import cls from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={cls.root}>
            <div className={cls.ldsripple}><div></div><div></div></div>
        </div>
    )
}
export default Loading;