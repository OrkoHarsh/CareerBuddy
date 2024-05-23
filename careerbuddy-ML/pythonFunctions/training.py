import pandas as pd
from numpy import loadtxt
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import pickle

from sklearn import tree, svm

from sklearn.ensemble import RandomForestClassifier


# load data
dataset = loadtxt("data/data.csv", delimiter=",")
# split data into X and y
X = dataset[:, 0:8]
Y = dataset[:, 8]
# split data into train and test sets
seed = 7
test_size = 0.2
X_train, X_test, y_train, y_test = train_test_split(
    X, Y, test_size=test_size, random_state=seed
)


# convert y_train float array to int array


y_train = y_train.astype(int)
y_test = y_test.astype(int)
X_train = X_train.astype(int)
X_test = X_test.astype(int)

print(X_test)
clf1 = XGBClassifier()
clf1.fit(X_train, y_train)
y_pred = clf1.predict(X_test)
predictions = [round(value) for value in y_pred]

o = pickle.dump(clf1, open('model.pkl', 'wb'))

# p = pickle.dump(predictions,open('vector.pkl','wb'))
# evaluate predictions

# print(predictions)
accuracy = accuracy_score(y_test, predictions)
print("Accuracy: %.2f%%" % (accuracy * 100.0))


# make predictions for test data
