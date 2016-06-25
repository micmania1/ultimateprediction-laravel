<?php

namespace App\Http\Controllers\Auth;

use App\Model\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
		$user = new User;
		$user->name = $data['name'];
		$user->email = $data['email'];
		$user->password = bcrypt($data['password']);
		$user->save();
		return $user;
    }

	protected function authenticated(Request $request, $throttles)
	{
		return $this->respondWithUser(Auth::user());
	}	

	protected function sendFailedLoginResponse(Request $request)
	{
		return response()->json([
			'error' => $this->getFailedLoginMessage()
		]);
	}

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            $this->throwValidationException(
                $request, $validator
            );
        }

        Auth::guard($this->getGuard())->login($this->create($request->all()));

		$user = Auth::user();
		if($user) {
			return $this->respondWithUser($user);
		}

		return response()->json([
			'error' => 'An error occurred during signup.',
		]);
    }

	/**
	 * Returns a JSON response to the browser with the given user.
	 *
	 * @param User $user
	 *
	 * @return Illuminate\Http\JsonResponse
	 */
	protected function respondWithUser(User $user)
	{
		return response()->json([
			'user' => [
				'name' => $user->name,
				'id' => $user->id,
			],
		]);	
	}
}
