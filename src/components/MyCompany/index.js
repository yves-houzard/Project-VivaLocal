// import module
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import component
// import ItemCard from '../ItemCard';
import SettingsInfos from './SettingsInfos';
import SettingsCom from './SettingsCom';
import ButtonUI from '../ButtonUI';
import Loading from '../Loading';
import MessageBox from '../MessageBox';
import NewCompany from '../NewCompany';
import UpPhoto from '../UpPhoto';
import EditableCard from '../ItemCard/EditableCard';

// import actions
import { actionsToggleInfos, actionToggleOn } from '../../actions/toggle';
import { actionsCompany } from '../../actions/company';
import { actionKillSpinner } from '../../actions/appLvl';

// style
import './style.scss';
import NewProduct from '../NewProduct';

export default function MyCompany() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State
  const {
    settingsInfos,
    editingInfos,
    editingCom,
    registerProduct,
  } = useSelector((state) => state.toggle);
  const company = useSelector((state) => state.company);
  const { id } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.appLvl);
  const image = useSelector((state) => state.company.image);
  const { loading } = useSelector((state) => state.appLvl);

  // Functions handle
  const handleClickInfos = () => {
    dispatch(actionsToggleInfos(settingsInfos));
  };
  // const handleClickAddProduct = () => {
  //   navigate('/register-product');
  // };

  const handleClickAddProduct = () => {
    dispatch(actionToggleOn('registerProduct'));
  };

  const handleShowPreview = () => {
    navigate(`/pro/${company.id}`);
  };

  const handleCloseSpinner = () => {
    dispatch(actionKillSpinner('main'));
  };

  // Load first
  useEffect(() => {
    if (id) dispatch(actionsCompany());
  }, [id]);

  // useEffect(() => {
  //   dispatch(actionKillSpinner('main'));
  // }, [creatingTime]);

  /* we set default value to true in state, because of execution order :
  When App loads, we fetch user (user id and company id are both undefined).
  We then load MyCompany. which loads faster => race condition issue :
  if we don’t set default loader value to true, actionsCompany() is in charge for populating
  loader value (true before fetching company, then false when result is in state).
  problem : MyCompany is rendered before user is fetched : hence MessageBox and NewCompany show up
  before loader is turned to true... for like a blink, but sometimes it’s visible though.
   */
  if (loading) return <Loading />;
  /* if company id is not defined : show message and form. */
  if (!company.id) {
    return (
      <>
        <MessageBox>Vous n’avez pas encore créé votre société.</MessageBox>
        <NewCompany />
      </>
    );
  }
  const classname = settingsInfos ? 'mycompany__dropinfos mycompany__dropinfos--active' : 'mycompany__dropinfos';

  return (
    <div className="mycompany">
      {error && (
        <MessageBox className="mycompany__error">{error}</MessageBox>
      )}

      {/* BLOCK from information edition */}
      <div className={classname}>
        <ButtonUI type="button" className="mycompany__dropinfos--toggle" onClick={handleClickInfos}><p>Éditer ma société</p></ButtonUI>
        <div className="mycompany__dropinfos__container">
          {/*  block communication sheet with component */}
          <div className="mycompany__com">
            <div className="mycompany__com--title">
              Bloc de communication
            </div>
          </div>
          <SettingsCom
            toggleEditing={editingCom}
            company={company}
          />

          {/* block information sheet with component */}
          <div className="mycompany__infos">
            <div className="mycompany__infos--title">
              Fiche d'informations
            </div>
          </div>
          <SettingsInfos
            toggleEditing={editingInfos}
            company={company}
          />
        </div>
      </div>

      <div className="mycompany__grid">
        {/* block image */}
        <div className="mycompany__avatar">
          <div className="mycompany__picture__wrapper">
            {
              image && image !== 'default' && <img className="mycompany__picture" src={image} alt={company.name} onLoad={handleCloseSpinner} />
            }
            {/* style edit-product__image__btn is defined in EditableCard stylesheet */}
            <UpPhoto keyName="main" spinnerColor="green" className="edit-product__image__btn" />
          </div>
        </div>
        {/* bloc title and buttons */}
        <div className="mycompany__interaction">
          {/* button add product or register-product form */}
          {
            registerProduct
              ? <NewProduct />
              : (
                <>
                  <h2 className="mycompany__title">
                    {company.name}
                  </h2>
                  {/* <div className="mycompany__add"> */}
                  <ButtonUI
                    type="button"
                    className="mycompany__add--btn"
                    onClick={handleShowPreview}
                  >
                    Aperçu
                  </ButtonUI>
                  <ButtonUI
                    type="button"
                    className="mycompany__add--btn"
                    onClick={handleClickAddProduct}
                  >
                    Ajouter un produit
                  </ButtonUI>
                </>
                // </div>
              )
          }
        </div>

        {/* Select filter */}
        {/* <div className="mycompany__filter"> */}
        {/* <div>
          Nos produits sur l'étalage :
        </div> */}
        {/* <select name="filter" id="filter-select">
          <option value="">Filtres</option>
          <option value="price+">Prix croissant</option>
          <option value="price-">Prix décroissant</option>
          <option value="fruits">Fruits</option>
          <option value="vegetable">Légumes</option>
        </select> */}

        {/* Block product with component ItemCard */}

        {company.product.map((product) => (
          <div className="mycompany__product" key={product.id}>
            <EditableCard
              key={product.id}
              productId={product.id}
            />
          </div>
        ))}

      </div>
    </div>
  );
}
