<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Socialite;
use App\User;

class SocialAuthController extends Controller
{
  public function redirect()
  {
      return Socialite::driver('facebook')->redirect();
  }

  public function callback()
  {
      $providerUser = \Socialite::driver('facebook')->user();

          $user = User::create([
          'email' => $providerUser->getEmail(),
          'name' => $providerUser->getName(),
          'password' => '<no_pass>',
          ]);


       auth()->login($user);

       return redirect()->to('index');


  }
}
