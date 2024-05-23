from fastapi import FastAPI, File, UploadFile
import uvicorn
from pydantic import BaseModel
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class scoring_item(BaseModel):
    Skill1: int
    Skill2: int
    Skill3: int
    Skill4: int
    Skill5: int
    Skill6: int
    Skill7: int
    Skill8: int


class it_item(BaseModel):
    Skill1: int
    Skill2: int
    Skill3: int
    Skill4: int
    Skill5: int
    Skill6: int
    Skill7: int
    Skill8: int
    Skill9: int
    Skill10: int
    Skill11: int
    Skill12: int
    Skill13: int
    Skill14: int
    Skill15: int
    Skill16: int
    Skill17: int
    Skill18: int
    Skill19: int


# print(xgboost.Booster.load_model.__doc__);
# print(xgboost.__version__)

with open('model.pkl', 'rb') as f:
    bst = pickle.load(f)


@app.post("/predict_career")
async def scoring_endpoint(item: scoring_item):
    df = pd.DataFrame([item.dict().values()], columns=item.dict().keys())
    yhat = bst.predict(df)
    return {'prediction': int(yhat)}


with open('IT_model.pkl', 'rb') as f:
    it_career = pickle.load(f)


@app.post("/predict_it_career")
async def it_endpoint(item: it_item):
    print('worled')
    df = pd.DataFrame([item.dict().values()], columns=item.dict().keys())
    yhat = it_career.predict(df)
    return {'prediction': int(yhat)}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
