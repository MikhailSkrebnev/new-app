from flask import Flask, render_template, redirect, url_for, request


app = Flask(__name__)




@app.route('/home')
@app.route('/')
def index():
    return render_template('index.html')



@app.route('/submit', methods=['POST'])
def test_submit():

    if request.method == 'POST':

        new_data = request.form


        print(f'New DATA: {new_data}')

        return redirect(url_for('bank_accounts'))



@app.route('/bank-accounts')
def bank_accounts():
    return render_template('bank_accounts.html')




@app.route('/new-bank-account')
def new_bank_account():
    return render_template('new_bank_account.html')






if __name__ == '__main__':
    app.run(debug=True, port=5000)
